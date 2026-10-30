# Reverse-centaur illustration

Created on 30 October 2026 using the built-in imagegen tool for `#/ai-workload-pressure`.

The illustration was removed from the presentation at Andrew's request. The files and prompts are retained as an unused draft.

Final asset: [reverse-centaur-weary.png](../src/images/qcon26/reverse-centaur-weary.png). This original illustration depicts the metaphor and is not artwork from Doctorow's book. The transparent PNG is 1024×1536px. The initial upright version is retained as [reverse-centaur.png](../src/images/qcon26/reverse-centaur.png).

Book reference verified against the [publisher's page](https://us.macmillan.com/books/9780374621568/thereversecentaursguidetolifeafterai/): Cory Doctorow, *The Reverse Centaur's Guide to Life After AI*, MCD, 2026.

## Initial generation prompt

```text
Use case: illustration-story
Asset type: transparent presentation illustration
Primary request: one reverse centaur: a horse's head on a human body.
Subject: a single standing adult human figure with two human arms, two human legs, ordinary plain shirt and trousers, and a clearly recognizable natural brown horse head with upright ears and a short mane in place of the human head. Human hands and feet. Friendly neutral pose, three-quarter view, arms relaxed.
Style/medium: clean polished editorial cartoon illustration, simple bold outline and restrained shading, easily legible at a small size beside a presentation table.
Composition/framing: isolated full body, head through feet completely visible, centered, tall portrait composition with minimal empty margin.
Scene/backdrop: genuinely transparent background.
Constraints: one figure only; no horse body, no four-legged centaur, no extra limbs, no props, no text, no frame, no logo, no watermark. The figure itself must be opaque, with white shirt and dark trousers.
```

## Final edit prompt

Input: `src/images/qcon26/reverse-centaur.png`. Transparency enabled and preserved.

```text
Use case: precise-object-edit
Asset type: transparent presentation illustration
Edit target: the supplied horse-headed human illustration.
Primary request: make this same reverse-centaur character look worn out and physically exhausted, with a clearly stooped human body.
Change only posture and signs of fatigue: bend the upper back and shoulders forward, lower the horse head and neck, let the human arms hang heavily, soften the knees slightly, give the figure a weary expression and tired eyes. The white shirt can be rumpled. Make the stoop obvious at small presentation size.
Keep the same brown horse head, mane, white shirt, dark trousers, human hands, human legs and shoes, full-body framing, clean editorial illustration style, and genuinely transparent background. The character itself should remain opaque. Show the full figure from ears through feet.
Constraints: one figure only, exactly two human arms and two human legs. No horse torso, no extra limbs, no new props, no text, no logos, no border, no shadow or colored background. Preserve existing transparency.
```
