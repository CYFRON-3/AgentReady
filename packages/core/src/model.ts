export type RuleStatus = "pass" | "partial" | "fail";

export type ReadinessGrade = "ready" | "mostly-ready" | "needs-work" | "not-ready";

export interface Evidence {
  readonly kind: string;
  readonly path: string;
  readonly summary: string;
}

export interface Finding {
  readonly ruleId: string;
  readonly status: RuleStatus;
  readonly earnedPoints: number;
  readonly maximumPoints: number;
  readonly evidence: readonly Evidence[];
  readonly explanation: string;
  readonly recommendation: string;
}

export interface Diagnostic {
  readonly code: string;
  readonly severity: "warning" | "critical" | "error";
  readonly message: string;
  readonly path?: string;
}

export interface ScanReport {
  readonly schemaVersion: string;
  readonly rubricVersion: string;
  readonly toolVersion: string;
  readonly score: number;
  readonly grade: ReadinessGrade;
  readonly complete: boolean;
  readonly findings: readonly Finding[];
  readonly diagnostics: readonly Diagnostic[];
  readonly recommendations: readonly string[];
}
