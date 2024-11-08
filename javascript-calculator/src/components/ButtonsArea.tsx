import { highOperators, lowOperators } from "../lib/consts";
import { NumbersArea } from "./NumbersArea";

interface Props {
    handleClear: () => void;
    handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleEqual: () => void
}

export const ButtonsArea: React.FC<Props> = ({ handleClear, handleChange, handleEqual }) => {
  return (
    <section className="btnsArea">
      <button id="clear" onClick={handleClear} className="btn-AC">
        AC
      </button>

      {highOperators.map((item) => (
        <button
          key={item.id}
          id={item.id}
          value={item.value}
          onClick={handleChange}
          className="opBtn"
        >
          {item.value}
        </button>
      ))}

      <NumbersArea changeNumber={handleChange} />

      {lowOperators.map((item) => (
        <button
          key={item.id}
          id={item.id}
          value={item.value}
          onClick={handleChange}
          className="opBtn"
        >
          {item.value}
        </button>
      ))}
      <button id="equals" onClick={handleEqual} className="btn-equal">
        =
      </button>
    </section>
  );
};
