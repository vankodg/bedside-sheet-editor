import { Container } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import SettingContainer from './components/SettingContainer';
import SvgContainer from './components/SvgContainer';
import { useLocalStorage } from './utils/myHooks';

const saveSvgAsPng = require('save-svg-as-png');

export default function App() {
  const [numOfRows, setNumOfRows] = useLocalStorage('numOfRows', 1);
  const [isFirstCol, setIsFirstCol] = useLocalStorage('isFirstCol', false);
  const [firstColLabelList, setFirstColLabelList] = useLocalStorage<string[]>(
    'firstColLabelList',
    [],
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
    output += 'ROW_HEIGHT = ' + 16 + '\n';
    output += 'COLUMN_WIDTH = ' + 900 / 24 + '\n';
    output += 'INPUT_SECTION_OFFSET_X = ' + (isFirstCol ? 60 : 0) + '\n';
    output += 'INPUT_SECTION_OFFSET_Y = ' + 0 + '\n';
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' }); // Step 3
    const url = URL.createObjectURL(blob); // Step 4
    setConfigDownloadUrl(url.toString());
  };

  return (
    <Container size="xl">
      <SettingContainer
        numOfRows={numOfRows}
        setNumOfRows={setNumOfRows}
        isFirstCol={isFirstCol}
        setIsFirstCol={setIsFirstCol}
        downloadPng={downloadPng}
        downloadConfig={downloadConfig}
        firstColLabelList={firstColLabelList}
        setFirstColLabelList={setFirstColLabelList}
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
        isFirstCol={isFirstCol}
        firstColLabelList={firstColLabelList}
      />
    </Container>
  );
}
