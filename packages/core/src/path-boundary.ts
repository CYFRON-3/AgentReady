import * as path from "node:path";

/**
 * Checks a candidate path against an already canonicalized root.
 *
 * Callers must resolve symlinks before this check and must never follow a
 * symlink discovered inside the target repository.
 */
export function isPathInsideRoot(canonicalRoot: string, candidatePath: string): boolean {
  const root = path.resolve(canonicalRoot);
  const candidate = path.resolve(candidatePath);
  const relative = path.relative(root, candidate);

  return (
    relative === "" ||
    (relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative))
  );
}

export function assertPathInsideRoot(canonicalRoot: string, candidatePath: string): void {
  if (!isPathInsideRoot(canonicalRoot, candidatePath)) {
    throw new RangeError("Refusing to access a path outside the repository root.");
  }
}

export function toRepositoryRelativePath(canonicalRoot: string, candidatePath: string): string {
  assertPathInsideRoot(canonicalRoot, candidatePath);
  const relative = path.relative(path.resolve(canonicalRoot), path.resolve(candidatePath));

  return relative === "" ? "." : relative.split(path.sep).join("/");
}
