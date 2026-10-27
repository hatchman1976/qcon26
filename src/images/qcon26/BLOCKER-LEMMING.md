# Blocker Lemming artwork

The presentation uses the original Amiga sprite of the arms-out Blocker
character on the title slide, Fish Diagram, diagram legend, and Protect the
Error Margin slide. The modern 3D artwork is retired and
must not be reintroduced. Game artwork belongs to its respective rights
holders; inclusion here does not establish a reuse license.

## Original Amiga sprite

The title slide, Fish Diagram, diagram legend, and Protect the Error Margin use the classic Amiga version of *Lemmings*
(DMA Design / Psygnosis, 1991).

### Public source

- Sprite-sheet conversion and coordinate mapping: Martin H.,
  [“Lemmings…”, The Back Shed, page 2](https://thebackshed.com/forum/ViewTopic.php?P=2&TID=17949),
  August 27–28, 2026. The preceding page identifies the sheet as converted Amiga
  sprites.
- Original archived sheet, linked by the converter:
  [“Lemming”, The Spriters Resource](https://www.spriters-resource.com/amiga_amiga_cd32/lemmings/asset/37732/),
  uploaded by Megasis.
- [Source PNG](https://thebackshed.com/forum/uploads/Martin%20H/2026-08-28_051209_lemming.png),
  296 × 336 pixels, downloaded October 22, 2026.
- The source mapping explicitly lists the Blocker at `x=0`, `y=96`, with 16
  animation frames in 16 × 16 cells, laid out horizontally.

### Included files

- `blocker-lemming.gif`: the original 16-pose sequence used throughout the presentation, in
  source order, repeating indefinitely. Head turns from one side to the other and back while
  the arms remain outstretched. Each source pose lasts 120 ms; identical
  consecutive poses may be stored as a single GIF frame with a longer delay.
  The complete loop lasts 1.92 seconds. This presentation timing is deliberately
  readable at slide scale; the source sheet does not specify gameplay timing.
- `blocker-lemming.png`: source pose 6, facing the audience, for reduced-motion
  and print fallbacks throughout the presentation.

Each 16 × 16 source cell was trimmed by the same rectangle `(2, 6, 12, 16)`,
yielding a 10 × 10 image without changing the sprite pixels. The source magenta
background (`#ff00ff`) is transparent. The other source colors are preserved
exactly: hair `#008000`, clothes `#0040ff`, and skin `#ffffff`. Render with nearest
neighbor / `image-rendering: pixelated` when enlarged.

No full game files or complete sprite sheet are shipped with the presentation.
