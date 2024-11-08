import { numberBtnItem, OperatorItem } from "./types";

export const maxDigitsMessage = "Max digits reached" as const;

export const defaultNumberBtns: readonly numberBtnItem[] = [
  {
    id: "seven",
    value: 7,
  },
  {
    id: "eight",
    value: 8,
  },
  {
    id: "nine",
    value: 9,
  },
  {
    id: "four",
    value: 4,
  },
  {
    id: "five",
    value: 5,
  },
  {
    id: "six",
    value: 6,
  },
  {
    id: "one",
    value: 1,
  },
  {
    id: "two",
    value: 2,
  },
  {
    id: "three",
    value: 3,
  },
  {
    id: "zero",
    value: 0,
  },
  {
    id: "decimal",
    value: ".",
  },
] as const;

export const highOperators: OperatorItem[] = [
  {
    id: "multiply",
    value: "X",
  },
  {
    id: "divide",
    value: "/",
  },
] as const;

export const lowOperators: OperatorItem[] = [
  {
    id: "add",
    value: "+",
  },
  {
    id: "subtract",
    value: "-",
  },
] as const;
