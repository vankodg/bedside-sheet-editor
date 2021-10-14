type MyProps = {
  numOfRows: number;
  setNumOfRows: (x: number) => void;
  isFirstCol: boolean;
  setIsFirstCol: (x: boolean) => void;
  download: () => void;
};

export default function SettingContainer(props: MyProps) {
  return (
    <div>
      <div>
        <label htmlFor={'numOfRows'}>Number of rows:</label>
        <input
          id={'numOfRows'}
          min={0}
          max={100} /* just to be safe */
          type={'number'}
          value={props.numOfRows}
          onChange={(event) => {
            let value = event.target.valueAsNumber;
            if (Number.isInteger(value) && 0 <= value && value <= 100) {
              props.setNumOfRows(value);
            }
          }}
        ></input>
      </div>
      <div>
        <input
          type={'checkbox'}
          //value={props.isFirstCol}
          id={'firstColumn'}
          onClick={() => {
            props.setIsFirstCol(!props.isFirstCol);
          }}
        ></input>
        <label htmlFor={'firstColumn'}>First Column?</label>
      </div>
      <div>
        <button onClick={(event) => props.download()}>Download</button>
      </div>
    </div>
  );
}
