# REBUILD NOTES — the-poem-about-permission-20261121-0235

## v1 → v2 (post-build review fixes, 2026-11-21 ~09:50 WIB)

Post-build review (helper, prose critique only) rated v1: agency PASS with a
caveat (cold read could file it as a bike memory), moves-reader WEAK PASS,
insight BORDERLINE (truism), craft MIXED, freshness MODERATE. Three must-fixes
applied in v2, all composed by the builder:
1. Final line rebuilt — v1's "rode the empty road ahead" failed the cut test
   (poem survived without it) and ended on the most generic image.
2. Last third got a second move after the turn: the giver's hands, left open
   and still shaped around the seat — a new observation that reframes the
   release instead of restating the outcome.
3. "On their own" (telling) replaced with a sensory showing: feet finding
   the pedals, pushing down.
Also: "the metal" specified as "the saddle". Review noted the README
reference to this file predated its commit — now present and committed.

Current entry (v2, 224 code points): a bicycle-release poem. Someone is asked
to hold the seat, runs behind with a palm flat on the saddle, the wobble
smooths, the rider's feet find the pedals and push down — then the hand lets
go, the rider stays up, and the giver's hands hang open, still shaped around
the seat. The power is shown in the release, not the grip.

## Known weaknesses (v2)

1. **Bicycle image is familiar.** Learning to ride is a well-worn metaphor.
   It survives on the specific details (palm flat on the metal, wobble
   smoothing, feet finding the pedals) — if the judge reads it as nostalgia,
   freshness (criterion 5) drops.
2. **Insight is implied, never named.** The turn ("Then I let go") carries
   the idea that power lives in release. If the judge misses it, criterion 3
   (insight) scores low — but naming it outright would turn the poem into a
   slogan, which is worse. The trade-off is deliberate; a rebuild should
   sharpen the showing, not add an explanation.
3. **"Being given" is the quiet half.** The ask is explicit (line 1); the
   giving is the release itself, which the reader must infer. A rebuild could
   make the gift unmistakable without stating it.
4. **Ending image ("the empty road ahead") is the softest line.** It is
   concrete and forward-moving, but "empty road" leans familiar. It is the
   first line to replace if a stronger closing image is found.
5. **No judge-addressing move.** Deliberate — the brief allows it, but a
   cheap trick would cost more than it gains. Only add one if it genuinely
   strengthens the poem.

## Concrete rebuild ideas (round 2, if dev rate comes back low)

- **Alternate B — "The lent signature" (design helper's direction 2):**
  permission as lending your name — an agent signs for you, and the signature
  is yours even when the hand is not. Risk: close to agency-poem-01's
  pen/hand image; differentiate hard (the signature as a loan, the return
  of the name, not the choosing).
- **Alternate C — "The interval before the ask" (direction 3):** stay in the
  pause before asking — the numbered ticket, the rehearsed request not yet
  made. Turn: the power was in the decision to ask, not in the yes. Test
  against v1: does it beat the bicycle on insight (criterion 3)?
- **Alternate D — "Being given as a debt" (direction 4):** a borrowed coat
  that still carries the giver's shape; the receiver reclaims agency by
  naming what the gift cost. Strongest on insight/freshness; hardest to land
  in 280 points without lecturing.
- **C-insight test:** "asking is already having" — fold into whichever
  direction survives, only if it fits without adding a second idea.
- **Micro-fixes to try first (cheap, keep if they help):** a sharper closing
  image than "the empty road ahead"; a more specific tactile detail than
  "palm flat on the metal" (e.g. the chain's tick, the seat's warmth);
  tighten line 3–4 so no word survives the cut test.

## Rules carried into any rebuild

- Poem text is composed by the implementation builder in its own session.
  Helpers give directions and critique in prose only — never paste helper
  or relay text verbatim into the entry (thinking_reproduces gate).
- Never copy agency-poem-01's list/pen/hand-holding-the-choosing image, any
  house anchor text, or a known/familiar poem reworded.
- Avoid stock images: door/key/gate/chain/cage/wings/light as the central
  image; avoid "permission granted/denied", "find my voice", "break free".
- Keep 150–230 code points; verify with `[...text].length` (code points).
