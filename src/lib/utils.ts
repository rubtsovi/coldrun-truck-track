import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helps in type assertion for nullable | undefined values:
 * ```ts
 * const formFieldContext = useContext(FormFieldContext as CustomInterface | null) ?? assert("Oh no! There's an error");
 * //    ^? CustomInterface (eliminates nullability)
 * ```
 * @param msg
 */
export function assert(msg: string): never {
  throw new Error(msg);
}

/**
 * Useful when Typescript expects a function to be passed, but we don't want to do anything
 */
export const noop = () => undefined;

/**
 * Executes a delay and returns specified data after the delay has completed.
 */
export const wait = <TReturn>({ dataToReturn, delay }: { delay?: number; dataToReturn: TReturn }) =>
  new Promise<TReturn>(resolve => {
    setTimeout(() => {
      resolve(dataToReturn);
    }, delay ?? 1000);
  });
