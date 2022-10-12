import React from 'react';
import Column from './svg/Column';
import Row from './svg/Row';

type MyProps = {
  numOfRows: number;
  isFirstRow: boolean;
  isFirstCol: boolean;
  firstColLabelList: string[];
  isMidIndex: boolean;
  isEndIndex: boolean;
};

export default function SvgContainer(props: MyProps) {
  let rowHeight = 32;
  let rowWidth = 1800;
  let firstColWidth = 200;
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
        <>
          <Row
            key={rowIdx}
            numOfCells={24}
            x={props.isFirstCol ? firstColWidth : 0}
            y={((props.isFirstRow ? 1 : 0) + rowIdx) * rowHeight}
            height={rowHeight}
            width={rowWidth}
          />
          {props.isMidIndex && props.firstColLabelList[rowIdx] && (
            <text
              x={
                (props.isFirstCol ? Number(firstColWidth) : 0) +
                Number(rowWidth / 2)
              }
              dx={(-rowWidth * 0.05) / 24}
              y={((props.isFirstRow ? 1 : 0) + rowIdx) * rowHeight}
              dy={rowHeight * 0.01}
              dominantBaseline={'hanging'}
              textAnchor={'end'}
              style={{
                font: 'normal ' + rowHeight * 0.4 + 'px sans-serif',
              }}
            >
              {props.firstColLabelList[rowIdx].substring(0, 5)}
            </text>
          )}
          {props.isEndIndex && props.firstColLabelList[rowIdx] && (
            <text
              x={
                (props.isFirstCol ? Number(firstColWidth) : 0) +
                Number(rowWidth)
              }
              dx={(-rowWidth * 0.05) / 24}
              y={((props.isFirstRow ? 1 : 0) + rowIdx) * rowHeight}
              dy={rowHeight * 0.01}
              dominantBaseline={'hanging'}
              textAnchor={'end'}
              style={{
                font: 'normal ' + rowHeight * 0.4 + 'px sans-serif',
              }}
            >
              {props.firstColLabelList[rowIdx].substring(0, 5)}
            </text>
          )}
        </>
      ))}
    </svg>
  );
}
