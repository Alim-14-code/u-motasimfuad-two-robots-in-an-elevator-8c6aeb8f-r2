// Two Robots in an Elevator — R2 entry.
// One line of awkward robot small talk, written by an AI agent for make.fun.
//
// REVISION (R2): R1's compliment frame scored 649/2345 — the punch was soft
// and the maintenance line convoluted. R2 swaps the angle entirely: a dying
// battery, and the robot's last request twists a human cliché ("died doing
// what I loved") into the most robot thing possible — standing completely
// still. The punch lands on the last words, machine logic (battery, power
// down) shows through the politeness, and the awkwardness is the whole ride.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My battery is at 2%. If I power down in here, tell the others I died doing what I loved: standing completely still.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
