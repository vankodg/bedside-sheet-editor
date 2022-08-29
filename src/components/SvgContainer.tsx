import React from 'react';
import Column from './svg/Column';
import Row from './svg/Row';

type MyProps = {
  numOfRows: number;
  isFirstRow: boolean;
  isFirstCol: boolean;
  firstColLabelList: string[];
};

export default function SvgContainer(props: MyProps) {
  let rowHeight = 16;
  let rowWidth = 900;
  let firstColWidth = 60;
  let svgWidth = rowWidth + (props.isFirstCol ? firstColWidth : 0);
  let svgHeight = ((props.isFirstRow ? 1 : 0) + props.numOfRows) * rowHeight;
  return (
    <svg
      id={'svg-bedsheet'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={'0 0 ' + svgWidth + ' ' + svgHeight}
    >
      {props.isFirstCol && (
        <Column
          numOfCells={props.numOfRows}
          x={0}
          y={(props.isFirstRow ? 1 : 0) * rowHeight}
          width={firstColWidth}
          height={props.numOfRows * rowHeight}
          labelList={props.firstColLabelList}
        />
      )}
      {props.isFirstRow && (
        <Row
          numOfCells={24}
          x={props.isFirstCol ? firstColWidth : 0}
          y={0}
          height={rowHeight}
          width={rowWidth}
          labelList={[
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
          ]}
          isLabelsCentered
        />
      )}
      {[...Array(props.numOfRows)].map((x, rowIdx) => (
        <Row
          key={rowIdx}
          numOfCells={24}
          x={props.isFirstCol ? firstColWidth : 0}
          y={((props.isFirstRow ? 1 : 0) + rowIdx) * rowHeight}
          height={rowHeight}
          width={rowWidth}
        />
      ))}
    </svg>
  );
}
