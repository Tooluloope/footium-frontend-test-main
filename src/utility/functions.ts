import { ConditionalClass } from "./types";

/**
 * This function allows you to combine sevral classNames together.
 * For conditional classes, just pass in the condition (boolean)
 * as the first elemnt in the array and pass the classes you want
 * to merge as the other items in the array.
 */
export const mc = (...args: (string | ConditionalClass)[]): string => {
  return args.reduce((accumulator: string, currentValue) => {
    if (Array.isArray(currentValue)) {
      const bool = currentValue.shift();
      if (bool)
        return `${accumulator} ${mc(
          ...(currentValue as (string | ConditionalClass)[])
        )}`;
      return accumulator;
    }
    if (!currentValue) return accumulator;
    return `${accumulator ? `${accumulator} ` : ""}${currentValue}`;
  }, "");
};
