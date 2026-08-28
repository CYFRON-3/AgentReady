import { beforeEach, describe, expect, it, vi } from "vitest";
import { type CliIo, runCli } from "../src/program.js";

describe("runCli", () => {
  let io: CliIo;
  let out: ReturnType<typeof vi.fn>;
  let error: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    out = vi.fn();
    error = vi.fn();
    io = { out, error };
  });

  it("prints help without arguments", () => {
    expect(runCli([], io)).toBe(0);
    expect(out).toHaveBeenCalledWith(expect.stringContaining("agentready scan"));
    expect(error).not.toHaveBeenCalled();
  });

  it("prints the scaffold version", () => {
    expect(runCli(["--version"], io)).toBe(0);
    expect(out).toHaveBeenCalledWith("0.0.0");
  });

  it.each(["scan", "explain", "init"])("fails honestly for unimplemented %s", (command) => {
    expect(runCli([command], io)).toBe(2);
    expect(error).toHaveBeenCalledWith(expect.stringContaining("not implemented"));
  });

  it("rejects an unknown command", () => {
    expect(runCli(["launch"], io)).toBe(2);
    expect(error).toHaveBeenCalledWith(expect.stringContaining("Unknown command"));
  });
});
