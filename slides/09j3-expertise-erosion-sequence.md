# Expertise erosion sequence

Rendered step: `#/expertise-erosion-sequence`.

Placed immediately after `#/erosion-of-expertise` and before `#/ai-margin-pressure`, at `data-x="13100"`, `data-y="284150"`, `data-scale="3.037465"`. It has moved 3,000 canvas units to the right with the book slide, retaining their 3,250-unit horizontal spacing. The AI fish diagram remains visible behind both slides, although the sequence's camera position is beyond the fish outline.

## Slide content and reveal sequence

This slide contains images only, with no visible heading. Its transparent background shows the deck's shared blue canvas and retains the fish-diagram lines as the camera moves right.

On slide entry, show the complex-system diagram with four people and flashing coloured balls.

Use three presenter-controlled substeps:

1. Fade the initial scene away and replace it with the complex-system diagram, with a woman shrugging 🤷‍♀️ on its left and a man shrugging 🤷‍♂️ on its right.
2. Add a glowing flame emoji 🔥 in the centre of the complex-system diagram, sized at 180px (50% larger than the original). Keep the diagram and both shrugging emojis visible.
3. Fade all preceding images away and show the “This is Fine” comic loop with flickering flames.

Each transition preserves the slide's layout. Once the final GIF is revealed, it remains visible at its canvas position and continues playing when navigating away; leaving does not swap it for the still image or restart its animation. Reversing a substep restores its preceding scene, and re-entering the slide restores the entry scene for replay. Reduced-motion mode uses static coloured balls, a flame without an animated glow and a still image in place of the GIF, while retaining the same substeps.

## Speaker notes

The sequence carries the expertise discussion from the preceding book quotation into a visual metaphor: the complex system remains while the ability to explain and manage it is uncertain. The flame and “This is Fine” scene illustrate unaddressed trouble. They are not measured effects, a literal failure model or evidence that every use of AI erodes expertise.

## Sources and assets

- The complex-system diagram, people and coloured balls reuse the presentation's existing artwork.
- [Original complex-system image](https://srecon26.hatchman76.com/images/complex_sign_transparent.png), already saved as `src/images/srecon26/complex-sign-transparent.png`.
- The shrugging people and flame use emoji characters.
- “This is Fine”, based on [KC Green's original comic](https://gunshowcomic.com/648), uses [Philcrifo's animated comic loop on Imgur](https://imgur.com/gallery/i-animated-this-is-fine-comic-tjxrc). Its [GIF media](https://i.imgur.com/mtGc7Sl.gif) is saved as `src/images/qcon26/this-is-fine.gif`: 500 × 485 pixels, 72 frames, a 5.04-second infinite loop with visibly flickering flames. `src/images/qcon26/this-is-fine-still.png` supplies the reduced-motion still.
