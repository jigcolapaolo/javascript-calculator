import { maxDigitsMessage } from "../lib/consts";

export const isOperator = (digit: string) =>
  ["+", "-", "/", "X", "*"].includes(digit);
export const isHighOperator = (digit: string) => ["X", "/", "*"].includes(digit);
export const isLowOperator = (digit: string) => ["+", "-"].includes(digit);
export const hasDoubleZero = (digit: string) => digit === "00";

export const verifyFirstInput = (digit: string, lastValue: string, lastResult: string) => {
  const currentDigit = digit === "X" ? "*" : digit;
  const newValue = lastValue + currentDigit;

  // Check if "." is already in value
  if (
    currentDigit === "." &&
    lastValue
      .split(/[+\-*/]/)
      .pop()
      ?.includes(".")
  )
    return lastValue;

  // Check if the first digit is an operator sign
  // Check if the last character is an operator sign
  if (lastValue.length === 1 && isOperator(lastValue)) return currentDigit;

  // Check if the last three characters are operators
  if (newValue.slice(-3).split("").every(isOperator))
    return lastValue.slice(0, -2) + currentDigit;

  // Check if the last character and current digit are both operators
  const lastChar = newValue.charAt(newValue.length - 2);

  // Check based on operators
  if (
    (isHighOperator(lastChar) && isHighOperator(currentDigit)) ||
    (isLowOperator(lastChar) && isLowOperator(currentDigit)) ||
    (isLowOperator(lastChar) && isHighOperator(currentDigit))
  )
    return lastValue.slice(0, -1) + currentDigit;

  if (hasDoubleZero(newValue)) return digit;
  // Check if lastResult has value
  // Check if operator value is included
  if (lastResult)
    return isOperator(digit) ? lastResult + currentDigit : currentDigit;

  return newValue;
};

export const verifySecondInput = (digit: string, lastValue: string, lastResult: string, reset: boolean) => {
  const operators = ["+", "-", "/", "X"];
  const newValue = reset ? digit : lastValue + digit;

  if (hasDoubleZero(newValue)) return digit;
  // Check if lastResult has value and not an operator
  if (lastResult && !isOperator(digit)) return digit;
  // Check if operator value is included
  if (operators.some((op) => newValue.includes(op))) return digit;
  // Check if "." is already in value
  if (newValue.split(".").length > 2) return lastValue;
  // Check if it is the first "."
  if (newValue === ".") return "0.";
  // Check length
  if (newValue.length >= 22) return maxDigitsMessage;

  return newValue;
};
