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
            {...props.SVGProps}
          />
        ))}
      </g>
    </svg>
  );
}
