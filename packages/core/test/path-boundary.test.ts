import * as path from "node:path";
import { describe, expect, it } from "vitest";
import {
  assertPathInsideRoot,
  isPathInsideRoot,
  toRepositoryRelativePath,
} from "../src/path-boundary.js";

describe("path boundary", () => {
  const root = path.resolve("fixtures", "repository");

  it("accepts the root and descendants", () => {
    const child = path.join(root, "docs", "README.md");

    expect(isPathInsideRoot(root, root)).toBe(true);
    expect(isPathInsideRoot(root, child)).toBe(true);
    expect(toRepositoryRelativePath(root, child)).toBe("docs/README.md");
  });

  it("rejects parents and similarly prefixed siblings", () => {
    const parentFile = path.resolve(root, "..", "secret.txt");
    const siblingFile = path.resolve(`${root}-other`, "README.md");

    expect(isPathInsideRoot(root, parentFile)).toBe(false);
    expect(isPathInsideRoot(root, siblingFile)).toBe(false);
    expect(() => assertPathInsideRoot(root, parentFile)).toThrow(RangeError);
  });

  it("uses a stable marker for the repository root", () => {
    expect(toRepositoryRelativePath(root, root)).toBe(".");
  });
});
