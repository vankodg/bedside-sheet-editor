import React from 'react';
import { firstColWidth, rowHeight, rowWidth } from '../utils/constants';
import { GroupLabel } from '../utils/types';
import Cell from './svg/Cell';
import Column from './svg/Column';
import Row from './svg/Row';

type MyProps = {
  numOfRows: number;
  isFirstRow: boolean;
  isFirstCol: boolean;
  firstColLabelList: string[];
  isMidIndex: boolean;
  isEndIndex: boolean;
  groupLabelList: GroupLabel[];
};

export default function SvgContainer(props: MyProps) {
  let svgWidth =
    rowWidth + (props.isFirstCol ? firstColWidth + rowHeight : 0) + 1;
  let svgHeight =
    ((props.isFirstRow ? 1 : 0) + props.numOfRows) * rowHeight + 1;
  return (
    <svg
      id={'svg-bedsheet'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={'0 0 ' + svgWidth + ' ' + svgHeight}
    >
      {props.isFirstCol &&
        props.groupLabelList.map((item, rowIdx) => (
          <Cell
            key={rowIdx}
            label={item.label}
            x={-(item.endRow - item.startRow + 1) * rowHeight}
            y={
              (props.isFirstRow ? item.startRow : item.startRow - 1) * rowHeight
            }
            transform={
              'rotate(-90 0 ' +
              (props.isFirstRow ? item.startRow : item.startRow - 1) *
                rowHeight +
              ')'
            }
            height={rowHeight}
            width={(item.endRow - item.startRow + 1) * rowHeight}
            isLabelCentered
          />
        ))}
      {props.isFirstCol && (
        <Column
          key={-2}
          numOfCells={props.numOfRows}
          x={rowHeight}
          y={(props.isFirstRow ? 1 : 0) * rowHeight}
          width={firstColWidth}
          height={props.numOfRows * rowHeight}
          labelList={props.firstColLabelList}
        />
      )}
      {props.isFirstRow && (
        <Row
          key={-1}
          numOfCells={24}
          x={props.isFirstCol ? firstColWidth + rowHeight : 0}
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
        <g>
          <Row
            key={rowIdx}
            numOfCells={24}
            x={props.isFirstCol ? firstColWidth + rowHeight : 0}
            y={((props.isFirstRow ? 1 : 0) + rowIdx) * rowHeight}
            height={rowHeight}
            width={rowWidth}
          />
          {props.isMidIndex && props.firstColLabelList[rowIdx] && (
            <text
              key={'mid'}
              x={
                (props.isFirstCol ? Number(firstColWidth + rowHeight) : 0) +
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
              key={'end'}
              x={
                (props.isFirstCol ? Number(firstColWidth + rowHeight) : 0) +
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
        </g>
      ))}
    </svg>
  );
}
