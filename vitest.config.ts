import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: ["**/bin.ts", "packages/action/src/index.ts", "packages/core/src/index.ts"],
      include: ["packages/*/src/**/*.ts"],
      provider: "v8",
      reporter: ["text", "json-summary", "html"],
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
    include: ["packages/*/test/**/*.test.ts"],
    passWithNoTests: false,
    restoreMocks: true,
  },
});
