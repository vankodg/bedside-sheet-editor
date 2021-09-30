import React from 'react';
import SettingContainer from './components/SettingContainer';
import SvgContainer from './components/SvgContainer';
// @ts-ignore
import downloadSvg from 'svg-crowbar';

type MyProps = { numOfRows: number };
type MyState = { numOfRows: number };

export default class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      numOfRows: 1,
    };
  }

  render() {
    let svgContainer = <SvgContainer numOfRows={this.state.numOfRows} />;
    return (
      <>
        <SettingContainer
          setNumOfRows={(x: number) =>
            this.setState({ ...this.state, numOfRows: x })
          }
          download={() => downloadSvg(document.querySelector('svg'))}
        />
        {svgContainer}
      </>
    );
  }
}
