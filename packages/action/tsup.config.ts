import { defineConfig } from "tsup";

export default defineConfig({
  bundle: true,
  clean: true,
  entry: ["src/index.ts"],
  format: ["cjs"],
  noExternal: ["@actions/core", "@gutfish/agentready-core"],
  outDir: "dist",
  platform: "node",
  sourcemap: false,
  target: "node24",
});
