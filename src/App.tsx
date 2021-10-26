import { Container } from '@mantine/core';
import React from 'react';
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

  const handleClick = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById('svg-bedsheet'),
      'bedsheet.png',
    );
  };

  return (
    <Container size="xl">
      <SettingContainer
        numOfRows={numOfRows}
        setNumOfRows={setNumOfRows}
        isFirstCol={isFirstCol}
        setIsFirstCol={setIsFirstCol}
        download={handleClick}
        firstColLabelList={firstColLabelList}
        setFirstColLabelList={setFirstColLabelList}
      />
      <SvgContainer
        numOfRows={numOfRows}
        isFirstCol={isFirstCol}
        firstColLabelList={firstColLabelList}
      />
    </Container>
  );
}
