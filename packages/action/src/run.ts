export interface ActionApi {
  readonly getInput: (name: string) => string;
  readonly info: (message: string) => void;
  readonly setFailed: (message: string) => void;
}

export function runAction(api: ActionApi): void {
  api.getInput("path");
  api.getInput("fail-under");
  api.info("AgentReady received a scan request.");
  api.setFailed("AgentReady scan is not implemented in this pre-release scaffold.");
}
