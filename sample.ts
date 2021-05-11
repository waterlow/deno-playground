import { exists } from "https://deno.land/std@0.95.0/fs/exists.ts";

console.log(await exists("./sample.ts"));
