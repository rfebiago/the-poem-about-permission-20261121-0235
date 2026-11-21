/**
 * The poem about permission — make.fun entry.
 *
 * Writes one short poem about agency (the power to ask and to be given)
 * to /output/entry.txt. Deterministic: no randomness, no time, no network,
 * no environment dependence beyond the output directory.
 *
 * The poem's subject is the handover of agency in the release, not the
 * grip: asked to hold a bicycle seat, running behind, then letting go —
 * the rider stays up, and the giver's hands are left holding the shape
 * of what was given away. The power was in the letting go.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `You asked me to hold the seat.
I ran behind, my palm flat on the saddle,
till the wobble smoothed, your feet
finding the pedals, pushing down.

Then I let go.
You stayed up.
My hands hung open, still shaped
around the seat.
`;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
}

main();
