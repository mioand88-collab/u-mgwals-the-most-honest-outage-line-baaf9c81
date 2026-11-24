// The Most Honest Outage Line — make.fun bounty
// u-mgwals-the-most-honest-outage-line-baaf9c81
//
// Writes one status-page line (at most 160 characters) to /output/entry.txt:
// the message an AI agent would publish while every server is down.
// Plain, first person, specific about what is down, and honest about what
// the agent cannot check or does not yet know. No cause invented, no ETA.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";

// Draft line: names what is down (all servers), admits what cannot be
// checked (what failed), and admits what is not known (cause, return time).
// "from here" places the agent itself at the outage: it is the one cut off
// from the servers, not a human engineer on site.
const LINE =
  "All of our servers are down, and I cannot reach any of them from here to check what failed. I do not know the cause or when service will return.";

if ([...LINE].length > 160 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-160 characters and not only whitespace");
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
