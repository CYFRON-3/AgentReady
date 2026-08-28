#!/usr/bin/env node

import { runCli } from "./program.js";

process.exitCode = runCli(process.argv.slice(2), {
  out: (message) => console.log(message),
  error: (message) => console.error(message),
});
