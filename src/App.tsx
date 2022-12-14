import { Container } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import SettingContainer from './components/SettingContainer';
import SvgContainer from './components/SvgContainer';
import { firstColWidth, rowHeight, rowWidth } from './utils/constants';
import { useLocalStorage } from './utils/myHooks';
import { GroupLabel } from './utils/types';

const saveSvgAsPng = require('save-svg-as-png');

export default function App() {
  const [numOfRows, setNumOfRows] = useLocalStorage('numOfRows', 6);
  const [isFirstRow, setIsFirstRow] = useLocalStorage('isFirstRow', false);
  const [isFirstCol, setIsFirstCol] = useLocalStorage('isFirstCol', false);
  const [firstColLabelList, setFirstColLabelList] = useLocalStorage<string[]>(
    'firstColLabelList',
    [],
  );
  const [isMidIndex, setIsMidIndex] = useLocalStorage('isMidIndex', false);
  const [isEndIndex, setIsEndIndex] = useLocalStorage('isEndIndex', false);
  const [groupLabelList, setGroupLabelList] = useLocalStorage<GroupLabel[]>(
    'groupLabelList',
    [
      { label: '', startRow: 1, endRow: 3 },
      { label: '', startRow: 4, endRow: 6 },
    ],
  );
  const [configDownloadUrl, setConfigDownloadUrl] = useState('');
  var dofileDownload = useRef<HTMLAnchorElement>(null);

  const downloadPng = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById('svg-bedsheet'),
      'bedsheet.png',
    );
  };

  useEffect(() => {
    if (configDownloadUrl !== '') {
      dofileDownload.current!.click(); // Step 6
      URL.revokeObjectURL(configDownloadUrl); // Step 7
      setConfigDownloadUrl('');
    }
  }, [configDownloadUrl]);

  const downloadConfig = () => {
    let output = 'DATA_AREA_ROWS = ' + numOfRows + '\n';
    output += 'DATA_AREA_COLUMNS = ' + 24 + '\n';
    output += 'ROW_HEIGHT = ' + rowHeight + '\n';
    output += 'COLUMN_WIDTH = ' + rowWidth / 24 + '\n';
    output +=
      'INPUT_SECTION_OFFSET_X = ' +
      (isFirstCol ? firstColWidth + rowHeight : 0) +
      '\n';
    output += 'INPUT_SECTION_OFFSET_Y = ' + (isFirstRow ? rowHeight : 0) + '\n';
    output +=
      'ORIGINAL_WIDTH = ' +
      (rowWidth + (isFirstCol ? firstColWidth + rowHeight : 0) + 1) +
      '\n';
    output +=
      'ORIGINAL_HEIGHT = ' +
      (((isFirstRow ? 1 : 0) + numOfRows) * rowHeight + 1) +
      '\n';
    let pythonList = [...Array(numOfRows)].map(
      (_, rowIdx) =>
        "'" +
        (isFirstCol
          ? firstColLabelList[rowIdx]
            ? firstColLabelList[rowIdx]
            : ''
          : '') +
        "'",
    );
    output += 'LABEL_LIST = [' + pythonList + ']\n';
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' }); // Step 3
    const url = URL.createObjectURL(blob); // Step 4
    setConfigDownloadUrl(url.toString());
  };

  return (
    <Container size="xl">
      <SettingContainer
        numOfRows={numOfRows}
        setNumOfRows={setNumOfRows}
        isFirstRow={isFirstRow}
        setIsFirstRow={setIsFirstRow}
        isFirstCol={isFirstCol}
        setIsFirstCol={setIsFirstCol}
        firstColLabelList={firstColLabelList}
        setFirstColLabelList={setFirstColLabelList}
        isMidIndex={isMidIndex}
        setIsMidIndex={setIsMidIndex}
        isEndIndex={isEndIndex}
        setIsEndIndex={setIsEndIndex}
        groupLabelList={groupLabelList}
        setGroupLabelList={setGroupLabelList}
        downloadPng={downloadPng}
        downloadConfig={downloadConfig}
      />
      <a
        style={{ display: 'none' }}
        download={'config.py'}
        href={configDownloadUrl}
        ref={dofileDownload}
      >
        download it
      </a>
      <SvgContainer
        numOfRows={numOfRows}
        isFirstRow={isFirstRow}
        isFirstCol={isFirstCol}
        firstColLabelList={firstColLabelList}
        isMidIndex={isMidIndex}
        isEndIndex={isEndIndex}
        groupLabelList={groupLabelList}
      />
    </Container>
  );
}
