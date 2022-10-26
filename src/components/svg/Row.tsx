import Cell from './Cell';

type MyProps = {
  numOfCells: number;
  x: number;
  y: number;
  width: number;
  height: number;
  labelList?: string[];
  isLabelsCentered?: boolean;
};

export default function Row(props: MyProps) {
  let cellWidth = props.width / props.numOfCells;
  return (
    <g transform={'translate(' + props.x + ' ' + props.y + ')'}>
      {[...Array(props.numOfCells)].map((_, colIdx) => (
        <Cell
          key={colIdx}
          x={colIdx * cellWidth}
          y={0}
          width={cellWidth}
          height={props.height}
          label={props.labelList ? props.labelList[colIdx] : undefined}
          isLabelCentered={props.isLabelsCentered}
        />
      ))}
    </g>
  );
}
