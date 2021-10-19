import Cell from './Cell';

type MyProps = {
  numOfCells: number;
  x: number;
  y: number;
  width: number;
  height: number;
  firstColLabelList?: string[];
};

export default function Column(props: MyProps) {
  let cellHeight = props.height / props.numOfCells;
  return (
    <svg x={props.x} y={props.y}>
      <g>
        {[...Array(props.numOfCells)].map((_, rowIdx) => (
          <Cell
            key={rowIdx}
            x={0}
            y={rowIdx * cellHeight}
            width={props.width}
            height={cellHeight}
            label={
              props.firstColLabelList
                ? props.firstColLabelList[rowIdx]
                : undefined
            }
          />
        ))}
      </g>
    </svg>
  );
}
