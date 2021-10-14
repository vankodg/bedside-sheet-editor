import React, { useState } from 'react';
import SettingContainer from './components/SettingContainer';
import SvgContainer from './components/SvgContainer';

const saveSvgAsPng = require('save-svg-as-png');

export default function App() {
  const [numOfRows, setNumOfRows] = useState(1);
  const [isFirstCol, setIsFirstCol] = useState(false);

  const handleClick = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById('svg-bedsheet'),
      'bedsheet.png',
    );
  };

  return (
    <>
      <SettingContainer
        numOfRows={numOfRows}
        setNumOfRows={setNumOfRows}
        isFirstCol={isFirstCol}
        setIsFirstCol={setIsFirstCol}
        download={handleClick}
      />
      <SvgContainer numOfRows={numOfRows} />
    </>
  );
}
