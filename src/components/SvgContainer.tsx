import React from 'react';
import Cell from './Cell';

type MyProps = {
  numOfRows: number;
};

export default function SvgContainer(props: MyProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      {[...Array(props.numOfRows)].map((x, rowIdx) => (
        <g key={rowIdx}>
          {[...Array(24)].map((y, colIdx) => (
            <Cell
              key={rowIdx + '-' + colIdx}
              x={0 + colIdx * 32}
              y={0 + rowIdx * 16}
              width="32"
              height="1em"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
