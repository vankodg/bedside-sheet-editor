import { SVGProps } from 'react';
import Cell from './Cell';

type MyProps = {
  numOfCells: number;
  x: number;
  y: number;
  width: number;
  height: number;
  labelList?: string[];
  isLabelsCentered?: boolean;
  SVGProps?: SVGProps<SVGRectElement>;
};

export default function Row(props: MyProps) {
  let cellWidth = props.width / props.numOfCells;
  return (
    <svg x={props.x} y={props.y} width={props.width} height={props.height}>
      <g>
        {[...Array(props.numOfCells)].map((_, colIdx) => (
          <Cell
            key={colIdx}
            x={colIdx * cellWidth}
            y={0}
            width={cellWidth}
            height={props.height}
            label={props.labelList ? props.labelList[colIdx] : undefined}
            isLabelCentered={props.isLabelsCentered}
            {...props.SVGProps}
          />
        ))}
      </g>
    </svg>
  );
}
