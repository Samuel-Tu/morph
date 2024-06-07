import { isString } from "lodash-es";

class morphError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "morphError";
  }
}

export function throwError(scope: string, msg: string) {
  throw new morphError(`[${scope}]:${msg}`);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;

export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? new morphError(`[${scope}]:${msg}`) : scope;
    console.warn(err);
  }
}
