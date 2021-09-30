type MyProps = {
  setNumOfRows: (x: number) => void;
  download: () => void;
};

export default function SettingContainer(props: MyProps) {
  return (
    <div>
      Number of rows:{' '}
      <input
        defaultValue={1}
        min={0}
        max={100} /* just to be safe */
        type="number"
        onChange={(event) => props.setNumOfRows(parseInt(event.target.value))}
      ></input>
      <div>
        <button onClick={(event) => props.download()}>Download SVVGG</button>
      </div>
    </div>
  );
}
