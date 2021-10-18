import React from 'react';
import Column from './svg/Column';
import Row from './svg/Row';

type MyProps = {
  numOfRows: number;
  isFirstCol: boolean;
};

export default function SvgContainer(props: MyProps) {
  let rowHeight = 16;
  let rowWidth = 900;
  let firstColWidth = 60;
  return (
    <svg
      id={'svg-bedsheet'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      {props.isFirstCol && (
        <Column
          numOfCells={props.numOfRows}
          x={0}
          y={0}
          width={firstColWidth}
          height={props.numOfRows * rowHeight}
        />
      )}
      {[...Array(props.numOfRows)].map((x, rowIdx) => (
        <Row
          key={rowIdx}
          numOfCells={24}
          x={props.isFirstCol ? firstColWidth : 0}
          y={0 + rowIdx * rowHeight}
          height={rowHeight}
          width={rowWidth}
        />
      ))}
    </svg>
  );
}
