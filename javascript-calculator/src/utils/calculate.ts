export const highPrecedence = (str: string): string => {
  const regex = /(-?[\d.]+)([*/])(-?[+]?[\d.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

export const lowPrecedence = (str: string): string => {
  const regex = /(-?[\d.]+)([+-])(-?[\d.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : lowPrecedence(str2);
};

const infixEval = (str: string, regex: RegExp) => {
  return str.replace(regex, (_match, arg1, operator, arg2) => {
    const num1 = parseFloat(arg1);
    const num2 = parseFloat(arg2);

    if (operator === "*") return (num1 * num2).toString();
    if (operator === "/") return (num1 / num2).toString();
    if (operator === "-") return (num1 - num2).toString();
    if (operator === "+") return (num1 + num2).toString();

    return "";
  });
};
