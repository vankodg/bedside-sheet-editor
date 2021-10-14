import { SVGProps } from 'react';
import Cell from './Cell';

type MyProps = {
  numOfCells: number;
  x: number;
  y: number;
  width: number;
  height: number;
  SVGProps?: SVGProps<SVGRectElement>;
};

export default function Row(props: MyProps) {
  let cellWidth = props.width / props.numOfCells;
  return (
    <svg x={props.x} y={props.y}>
      <g>
        {[...Array(props.numOfCells)].map((_, colIdx) => (
          <Cell
            key={colIdx}
            x={colIdx * cellWidth}
            y={0}
            width={cellWidth}
            height={props.height}
            {...props.SVGProps}
          />
        ))}
      </g>
    </svg>
  );
}
