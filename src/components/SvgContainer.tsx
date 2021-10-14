import React from 'react';
import Row from './svg/Row';

type MyProps = {
  numOfRows: number;
};

export default function SvgContainer(props: MyProps) {
  let rowHeight = 20;
  let rowWidth = 960;
  return (
    <svg
      id={'svg-bedsheet'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      {[...Array(props.numOfRows)].map((x, rowIdx) => (
        <Row
          key={rowIdx}
          numOfCells={24}
          x={0}
          y={0 + rowIdx * rowHeight}
          height={rowHeight}
          width={rowWidth}
        />
      ))}
    </svg>
  );
}
