export interface CliIo {
  readonly out: (message: string) => void;
  readonly error: (message: string) => void;
}

const VERSION = "0.0.0";

const HELP = `AgentReady ${VERSION}

Evidence-first repository readiness checks for coding agents.

Usage:
  agentready scan [path] [--format text|json|markdown] [--fail-under N]
  agentready explain <rule-id>
  agentready init
  agentready --help
  agentready --version

Status: pre-release scaffold; scan, explain, and init are not implemented yet.`;

export function runCli(arguments_: readonly string[], io: CliIo): number {
  const command = arguments_[0];

  if (command === undefined || command === "--help" || command === "-h") {
    io.out(HELP);
    return 0;
  }

  if (command === "--version" || command === "-v") {
    io.out(VERSION);
    return 0;
  }

  if (command === "scan" || command === "explain" || command === "init") {
    io.error(`The ${command} command is not implemented in this pre-release scaffold.`);
    return 2;
  }

  io.error(`Unknown command: ${command}. Run agentready --help for usage.`);
  return 2;
}
