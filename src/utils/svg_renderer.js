import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SvgContainer from '../components/SvgContainer';

export default function svgRenderer() {
  return ReactDOMServer.renderToStaticMarkup(<SvgContainer />);
}
