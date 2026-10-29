# Expertise erosion sequence

Rendered step: `#/expertise-erosion-sequence`.

Placed immediately after `#/erosion-of-expertise` and before `#/ai-margin-pressure`, at `data-x="12100"`, `data-y="308150"`, `data-scale="3.037465"`. Both expertise slides move 1,000 world units left and 1,000 up, closer to the AI fish diagram's workload boundary. The book slide sits at `data-x="8850"`, `data-y="310150"`, keeping this sequence 3,250 units to its right and 2,000 units above it. Both retain their existing size. The AI fish diagram remains visible behind both slides, although the sequence's camera position is beyond the fish outline.

## Slide content and reveal sequence

This slide contains images only, with no visible heading. Its transparent background shows the deck's shared blue canvas and retains the fish-diagram lines as the camera moves right.

On slide entry, show the complex-system diagram with four people and flashing coloured balls. The diagram remains 495px wide and centred at the same position when the shrugging people replace them.

Use three presenter-controlled substeps:

1. Fade the initial scene away and replace it with the complex-system diagram, with a woman shrugging 🤷‍♀️ on its left and a man shrugging 🤷‍♂️ on its right.
2. Add a glowing flame emoji 🔥 in the centre of the complex-system diagram, sized at 180px (50% larger than the original). Keep the diagram and both shrugging emojis visible.
3. Fade all preceding images away and show the “This is Fine” comic loop with flickering flames.

Each transition preserves the slide's layout. Once the final GIF is revealed, it remains visible at its canvas position and continues playing when navigating away; leaving does not swap it for the still image or restart its animation. Reversing a substep restores its preceding scene, and re-entering the slide restores the entry scene for replay. Reduced-motion mode uses static coloured balls, a flame without an animated glow and a still image in place of the GIF, while retaining the same substeps.

## Speaker notes

The people, shrugging, flame and “This is Fine” are a metaphor for uncertain understanding and unaddressed trouble in a complex system. The system remains complex even when the people responsible for it can no longer explain what is happening or how to intervene.

This is an illustration of a risk to expertise and control, not evidence that every use of AI causes expertise loss or failure.

## Sources and assets

- The complex-system diagram, people and coloured balls reuse the presentation's existing artwork.
- [Original complex-system image](https://srecon26.hatchman76.com/images/complex_sign_transparent.png), already saved as `src/images/srecon26/complex-sign-transparent.png`.
- The shrugging people and flame use emoji characters.
- “This is Fine”, based on [KC Green's original comic](https://gunshowcomic.com/648), uses [Philcrifo's animated comic loop on Imgur](https://imgur.com/gallery/i-animated-this-is-fine-comic-tjxrc). Its [GIF media](https://i.imgur.com/mtGc7Sl.gif) is saved as `src/images/qcon26/this-is-fine.gif`: 500 × 485 pixels, 72 frames, a 5.04-second infinite loop with visibly flickering flames. `src/images/qcon26/this-is-fine-still.png` supplies the reduced-motion still.
