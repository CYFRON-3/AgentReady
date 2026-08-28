import { describe, expect, it, vi } from "vitest";
import { type ActionApi, runAction } from "../src/run.js";

describe("runAction", () => {
  it("fails explicitly instead of publishing a fabricated score", () => {
    const api: ActionApi = {
      getInput: vi.fn(() => ""),
      info: vi.fn(),
      setFailed: vi.fn(),
    };

    runAction(api);

    expect(api.getInput).toHaveBeenCalledWith("path");
    expect(api.getInput).toHaveBeenCalledWith("fail-under");
    expect(api.info).toHaveBeenCalledWith("AgentReady received a scan request.");
    expect(api.setFailed).toHaveBeenCalledWith(expect.stringContaining("not implemented"));
  });
});
