import { useState } from "react";
import "./styles/_app.scss";
import { highPrecedence, lowPrecedence } from "./utils/calculate";
import { ButtonsArea } from "./components/ButtonsArea";
import { DisplayArea } from "./components/DisplayArea";
import { verifyFirstInput, verifySecondInput } from "./utils/checkDigit";
import { maxDigitsMessage } from "./lib/consts";

export const App = () => {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("0");
  const [lastResult, setLastResult] = useState("");
  const [reset, setReset] = useState(true);
  const [blockInput, setBlockInput] = useState(false);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const digit = e.currentTarget.value;
    const firstResult = verifyFirstInput(digit, firstInputValue, lastResult);
    const secondResult = verifySecondInput(digit, secondInputValue, lastResult, reset);

    if (blockInput) return;
    if (secondResult === maxDigitsMessage) {
      const previousValue = secondInputValue;
      setSecondInputValue(maxDigitsMessage);
      setBlockInput(true);

      setTimeout(() => {
        setSecondInputValue(previousValue);
        setBlockInput(false);
      }, 1000);
    } else {
      setFirstInputValue(firstResult);
      setSecondInputValue(secondResult);
      setReset(false);
      setLastResult("");
    }
  };

  const handleClear = () => {
    setFirstInputValue("");
    setSecondInputValue("0");
    setReset(true);
    setLastResult("");
  };

  const handleEqual = () => {
    if (lastResult || !firstInputValue) return;

    const operation = firstInputValue;
    const highPrecResult = highPrecedence(operation);
    const result = lowPrecedence(highPrecResult);

    setFirstInputValue((prevState) => prevState + "=" + result);
    setSecondInputValue(result);
    setLastResult(result);
  };

  return (
    <div id="calculator">
      <DisplayArea
        firstInputValue={firstInputValue}
        secondInputValue={secondInputValue}
      />
      <ButtonsArea
        handleClear={handleClear}
        handleEqual={handleEqual}
        handleChange={handleChange}
      />
    </div>
  );
};
