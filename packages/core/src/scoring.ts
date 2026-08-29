import type { Finding, ReadinessGrade } from "./model.js";

type ScoredFinding = Pick<Finding, "earnedPoints" | "maximumPoints">;

export const RUBRIC_TOTAL_POINTS = 100;

function assertValidFinding(finding: ScoredFinding): void {
  const { earnedPoints, maximumPoints } = finding;
  const valid =
    Number.isFinite(earnedPoints) &&
    Number.isFinite(maximumPoints) &&
    earnedPoints >= 0 &&
    maximumPoints > 0 &&
    earnedPoints <= maximumPoints;

  if (!valid) {
    throw new RangeError("Finding points must be finite and within the rule maximum.");
  }
}

export function calculateScore(findings: readonly ScoredFinding[]): number {
  let earned = 0;
  let maximum = 0;

  for (const finding of findings) {
    assertValidFinding(finding);
    earned += finding.earnedPoints;
    maximum += finding.maximumPoints;
  }

  if (maximum !== RUBRIC_TOTAL_POINTS) {
    throw new RangeError(
      `A complete rubric must contain exactly ${RUBRIC_TOTAL_POINTS} available points.`,
    );
  }

  return Math.round((earned / RUBRIC_TOTAL_POINTS) * 100);
}

export function gradeForScore(score: number): ReadinessGrade {
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    throw new RangeError("Score must be an integer from 0 to 100.");
  }

  if (score >= 90) {
    return "ready";
  }
  if (score >= 75) {
    return "mostly-ready";
  }
  if (score >= 50) {
    return "needs-work";
  }
  return "not-ready";
}
