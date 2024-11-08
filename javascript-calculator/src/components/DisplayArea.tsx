interface Props {
    firstInputValue: string;
    secondInputValue: string;
}

export const DisplayArea: React.FC<Props> = ({ firstInputValue, secondInputValue }) => {
  return (
    <section className="displayArea">
      <div className="display">
        <p className="firstValue">{firstInputValue}</p>
        <p id="display" className="secondValue">
          {secondInputValue}
        </p>
      </div>
    </section>
  );
};
