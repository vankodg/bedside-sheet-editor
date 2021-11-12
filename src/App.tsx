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
    dofileDownload.current!.click(); // Step 6
    URL.revokeObjectURL(configDownloadUrl); // Step 7
    setConfigDownloadUrl('');
  }, [configDownloadUrl]);

  const downloadConfig = () => {
    console.log('valami');
    let output = 'string\nstring\n';
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' }); // Step 3
    const url = URL.createObjectURL(blob); // Step 4
    setConfigDownloadUrl(url.toString());
    console.log(blob);
    console.log(url);
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
        style={{ display: 'hidden' }}
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
