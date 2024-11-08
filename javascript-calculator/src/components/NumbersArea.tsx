import { defaultNumberBtns } from "../lib/consts";

interface Props {
    changeNumber: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const NumbersArea: React.FC<Props> = ({ changeNumber }) => {
  return (
    <section className="numbersArea">
      {defaultNumberBtns.map(item => (
        <button
          key={item.id}
          id={item.id}
          value={item.value}
          onClick={changeNumber}
          className="numBtn"
        >
          {item.value}
        </button>
      ))}
    </section>
  );
};
