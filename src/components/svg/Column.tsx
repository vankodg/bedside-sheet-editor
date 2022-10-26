import Cell from './Cell';

type MyProps = {
  numOfCells: number;
  x: number;
  y: number;
  width: number;
  height: number;
  labelList?: string[];
};

export default function Column(props: MyProps) {
  let cellHeight = props.height / props.numOfCells;
  return (
    <g transform={'translate(' + props.x + ' ' + props.y + ')'}>
      {[...Array(props.numOfCells)].map((_, rowIdx) => (
        <Cell
          key={rowIdx}
          x={0}
          y={rowIdx * cellHeight}
          width={props.width}
          height={cellHeight}
          label={props.labelList ? props.labelList[rowIdx] : undefined}
        />
      ))}
    </g>
  );
}
