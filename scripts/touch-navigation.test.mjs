import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/touch-navigation.js', import.meta.url), 'utf8');

class Node {
  constructor(tag, parent, attributes = {}) {
    this.tag = tag;
    this.parentElement = parent;
    this.attributes = attributes;
    this.dataset = {};
    for (const [name, value] of Object.entries(attributes)) {
      if (name.startsWith('data-')) {
        this.dataset[name.slice(5).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
      }
    }
    this.listeners = new Map();
  }

  closest(selector) {
    const matches = (node, candidate) => {
      const attribute = candidate.match(/^\[([^=\]]+)(?:=['"]([^'"]*)['"])?\]$/);
      return attribute
        ? Object.hasOwn(node.attributes, attribute[1]) &&
          (attribute[2] === undefined || node.attributes[attribute[1]] === attribute[2])
        : node.tag === candidate;
    };
    for (let node = this; node; node = node.parentElement) {
      if (selector.split(',').some((candidate) => matches(node, candidate.trim()))) return node;
    }
    return null;
  }

  addEventListener(type, listener, options = {}) {
    const capture = options === true || options.capture === true;
    const listeners = this.listeners.get(type) ?? [];
    listeners.push({ listener, capture });
    this.listeners.set(type, listeners);
  }
}

// Exercise capture/target/bubble ordering, including vendor listeners that were
// installed before the application script. Browser defaults remain observable.
function dispatch(target, type, properties = {}) {
  const event = {
    type, target, cancelable: true, defaultPrevented: false,
    propagationStopped: false, immediateStopped: false,
    stopPropagation() { this.propagationStopped = true; },
    stopImmediatePropagation() { this.propagationStopped = true; this.immediateStopped = true; },
    preventDefault() { if (this.cancelable) this.defaultPrevented = true; },
    ...properties,
  };
  const path = [];
  for (let node = target; node; node = node.parentElement) path.push(node);
  function invoke(node, capture) {
    for (const entry of node.listeners.get(type) ?? []) {
      if (entry.capture === capture) entry.listener(event);
      if (event.immediateStopped) break;
    }
  }
  for (const node of [...path].reverse()) {
    invoke(node, true);
    if (event.propagationStopped) {
      if (node === target && !event.immediateStopped) invoke(node, false);
      return event;
    }
  }
  for (const node of path) {
    invoke(node, false);
    if (event.propagationStopped) break;
  }
  return event;
}

function setup() {
  const document = new Node('document');
  const body = new Node('body', document);
  body.classList = new Set(['impress-enabled']);
  body.classList.contains = body.classList.has.bind(body.classList);
  document.body = body;
  const root = new Node('main', body);
  const slide = new Node('section', root);
  const content = new Node('p', slide);
  const slides = [slide, new Node('section', root), new Node('section', root)];
  let active = slide;
  root.querySelectorAll = () => slides;
  root.querySelector = () => active;
  const navigation = new Node('nav', body);
  const counter = new Node('span', navigation);
  const next = new Node('button', navigation, { 'data-direction': 'next' });
  const prev = new Node('button', navigation, { 'data-direction': 'prev' });
  navigation.querySelector = () => counter;
  document.querySelector = (selector) => selector === '#impress' ? root : navigation;
  const calls = [];
  const vendor = [];
  const api = { next: () => calls.push('next'), prev: () => calls.push('prev') };
  for (const type of ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'click', 'keydown', 'keyup']) {
    document.addEventListener(type, () => vendor.push(type));
  }
  vm.runInNewContext(source, { document, window: { innerWidth: 390, impress: () => api } });
  return {
    document, body, root, content, navigation, counter, next, prev, calls, vendor, api, slides,
    setActive(value) { active = value; },
  };
}

const touch = (x, y = 100, identifier = 1) => ({ identifier, clientX: x, clientY: y });
function send(target, type, touches, changedTouches = touches) {
  return dispatch(target, type, { touches, changedTouches });
}

test('many horizontal touch moves produce one next action on release and block vendor bubbling', () => {
  const app = setup();
  send(app.content, 'touchstart', [touch(300)]);
  const moves = [];
  for (let x = 290; x >= 100; x -= 10) moves.push(send(app.content, 'touchmove', [touch(x)]));
  assert.deepEqual(app.calls, [], 'Moves must not reveal substeps');
  const end = send(app.content, 'touchend', [], [touch(100)]);
  assert.deepEqual(app.calls, ['next']);
  assert.deepEqual(app.vendor, [], 'Vendor touch preview must never receive the gesture');
  assert.equal(moves.some((event) => event.defaultPrevented), true);
  assert.equal(end.defaultPrevented, true);
});

test('a right swipe calls previous once and a subsequent tap has no residual gesture', () => {
  const app = setup();
  send(app.content, 'touchstart', [touch(80)]);
  send(app.content, 'touchmove', [touch(240)]);
  send(app.content, 'touchend', [], [touch(240)]);
  assert.deepEqual(app.calls, ['prev']);
  send(app.content, 'touchstart', [touch(240)]);
  const tap = send(app.content, 'touchend', [], [touch(240)]);
  assert.deepEqual(app.calls, ['prev']);
  assert.equal(tap.defaultPrevented, false);
  assert.deepEqual(app.vendor, []);
});

test('vertical gestures, short drags, cancelled gestures and multi-touch never advance', () => {
  for (const scenario of ['vertical', 'short', 'cancel', 'multi-start', 'multi-move']) {
    const app = setup();
    send(app.content, 'touchstart', scenario === 'multi-start' ? [touch(300), touch(250, 100, 2)] : [touch(300)]);
    if (scenario === 'vertical') {
      const move = send(app.content, 'touchmove', [touch(220, 280)]);
      const end = send(app.content, 'touchend', [], [touch(220, 280)]);
      assert.equal(move.defaultPrevented || end.defaultPrevented, false, 'Keep vertical scrolling available');
    } else if (scenario === 'short') {
      send(app.content, 'touchmove', [touch(280)]);
      send(app.content, 'touchend', [], [touch(280)]);
    } else if (scenario === 'cancel') {
      send(app.content, 'touchmove', [touch(100)]);
      send(app.content, 'touchcancel', []);
      send(app.content, 'touchend', [], [touch(100)]);
    } else {
      send(app.content, 'touchmove', [touch(100), touch(250, 100, 2)]);
      send(app.content, 'touchend', [], [touch(100)]);
    }
    assert.deepEqual(app.calls, [], scenario);
    assert.deepEqual(app.vendor, [], scenario);
  }
});

test('links, tabs, buttons and other interactive controls retain browser defaults', () => {
  for (const [tag, attributes] of [
    ['a', { href: 'https://example.com/' }], ['button', {}], ['input', {}], ['select', {}],
    ['textarea', {}], ['div', { contenteditable: '' }], ['span', { role: 'tab' }], ['span', { role: 'slider' }],
  ]) {
    const app = setup();
    const control = new Node(tag, app.content, attributes);
    const child = new Node('span', control);
    const events = [
      send(child, 'touchstart', [touch(300)]),
      send(child, 'touchmove', [touch(100)]),
      send(child, 'touchend', [], [touch(100)]),
    ];
    assert.deepEqual(app.calls, [], tag);
    assert.equal(events.every((event) => !event.defaultPrevented), true, tag);
    assert.deepEqual(app.vendor, [], tag);
  }
});

test('navigation clicks use the button direction without reaching vendor click handlers', () => {
  const app = setup();
  const nextLabel = new Node('span', app.next);
  dispatch(nextLabel, 'click');
  dispatch(app.prev, 'click');
  dispatch(app.counter, 'click');
  assert.deepEqual(app.calls, ['next', 'prev']);
  assert.deepEqual(app.vendor, []);
});

test('navigation keyboard events keep native button activation and block vendor shortcuts', () => {
  const app = setup();
  for (const key of ['Enter', ' ', 'ArrowRight', 'ArrowLeft', 'Tab']) {
    for (const type of ['keydown', 'keyup']) {
      const event = dispatch(app.next, type, { key });
      assert.equal(event.defaultPrevented, false, `${type} ${key}`);
    }
  }
  assert.deepEqual(app.calls, [], 'Keyboard handling must not add a second activation');
  assert.deepEqual(app.vendor, []);
  dispatch(app.next, 'click');
  assert.deepEqual(app.calls, ['next'], 'The browser-generated button click advances once');
});

test('swipes and buttons use the current API methods, including review-mode replacements', () => {
  const app = setup();
  app.api.next = () => app.calls.push('review-next');
  send(app.content, 'touchstart', [touch(300)]);
  send(app.content, 'touchend', [], [touch(100)]);
  dispatch(app.next, 'click');
  app.api.prev = () => app.calls.push('review-prev');
  dispatch(app.prev, 'click');
  assert.deepEqual(app.calls, ['review-next', 'review-next', 'review-prev']);
});

test('the counter follows slide entry and clears when there is no active slide', () => {
  const app = setup();
  assert.equal(app.counter.textContent, '1 / 3');
  app.setActive(app.slides[1]);
  dispatch(app.slides[1], 'impress:stepenter');
  assert.equal(app.counter.textContent, '2 / 3');
  app.setActive(null);
  dispatch(app.document, 'impress:stepenter');
  assert.equal(app.counter.textContent, '');
});
