import { useRef } from "react";

type AnyFn = (...args: never[]) => unknown;

/**
 * usePersistFn instead of useCallback to reduce cognitive load
 */
export function usePersistFn<T extends AnyFn>(fn: T) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const persistFn = useRef<T | null>(null);
  if (!persistFn.current) {
    persistFn.current = ((...args: never[]) => fnRef.current(...args)) as T;
  }

  return persistFn.current!;
}
