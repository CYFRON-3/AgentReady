import { describe, expect, it } from "vitest";
import { calculateScore, gradeForScore } from "../src/scoring.js";

describe("calculateScore", () => {
  it("normalizes earned points to a 100-point score", () => {
    expect(
      calculateScore([
        { earnedPoints: 60, maximumPoints: 80 },
        { earnedPoints: 10, maximumPoints: 20 },
      ]),
    ).toBe(70);
  });

  it("returns zero for a complete rubric with no earned points", () => {
    expect(calculateScore([{ earnedPoints: 0, maximumPoints: 100 }])).toBe(0);
  });

  it("rounds once after all rule points are summed", () => {
    expect(calculateScore([{ earnedPoints: 75.5, maximumPoints: 100 }])).toBe(76);
  });

  it("rejects an incomplete rubric instead of inflating its score", () => {
    expect(() =>
      calculateScore([
        { earnedPoints: 8, maximumPoints: 8 },
        { earnedPoints: 6, maximumPoints: 12 },
      ]),
    ).toThrow(/exactly 100/);
    expect(() => calculateScore([])).toThrow(/exactly 100/);
  });

  it("rejects invalid point values", () => {
    expect(() => calculateScore([{ earnedPoints: 11, maximumPoints: 10 }])).toThrow(RangeError);
    expect(() => calculateScore([{ earnedPoints: 0, maximumPoints: 0 }])).toThrow(RangeError);
  });
});

describe("gradeForScore", () => {
  it.each([
    [100, "ready"],
    [90, "ready"],
    [89, "mostly-ready"],
    [75, "mostly-ready"],
    [74, "needs-work"],
    [50, "needs-work"],
    [49, "not-ready"],
    [0, "not-ready"],
  ] as const)("maps %i to %s", (score, grade) => {
    expect(gradeForScore(score)).toBe(grade);
  });

  it("rejects out-of-range and fractional scores", () => {
    expect(() => gradeForScore(-1)).toThrow(RangeError);
    expect(() => gradeForScore(101)).toThrow(RangeError);
    expect(() => gradeForScore(82.5)).toThrow(RangeError);
  });
});
