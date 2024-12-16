export function test(name: string, callback: () => void): void {
  try {
    callback();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.log(`✕ ${name}`);
    console.log(error);
  }
}

export interface Matchers<T> {
  toBe(expected: T): void;
  toEqual(expected: T): void;
  toExist(): void;
  toBeNull(): void;
}

function getMatchers<T>(negated: boolean, actual: any) {
  return {
    toBe(expected: T) {
      const result = actual === expected;
      if (negated ? result : !result) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected: T) {
      const result = actual == expected;
      if (negated ? result : !result) {
        throw new Error(
          negated
            ? `${actual} is equal to ${expected}`
            : `${actual} is not equal to ${expected}`
        );
      }
    },
    toExist() {
      const result = actual !== undefined;
      if (negated ? result : !result) {
        throw new Error(
          negated ? `${actual} is defined` : `${actual} is not defined`
        );
      }
    },
    toBeNull() {
      const result = actual === null;
      if (negated ? result : !result) {
        throw new Error(
          negated ? `${actual} is null` : `${actual} is not null`
        );
      }
    },
  };
}

export function expect<T>(actual: T) {
  return {
    not: {
      ...getMatchers(true, actual),
    },
    ...getMatchers(false, actual),
  };
}
