// Revision pass: one line added at the top, nothing else touched.
import { mkdir, writeFile } from "node:fs/promises";

const line =
  "The legacy code you curse was once someone's proudest Friday afternoon.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", line + "\n", "utf8");
