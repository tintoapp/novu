/* eslint-disable max-len */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M21.667 10.8a6.87 6.87 0 0 0-1.953-4.808A6.6 6.6 0 0 0 15 4a6.6 6.6 0 0 0-4.714 1.992A6.87 6.87 0 0 0 8.333 10.8C8.333 18.733 5 21 5 21h20s-3.333-2.267-3.333-10.2ZM17.73 24c-.278.607-.676 1.111-1.155 1.462-.48.35-1.023.535-1.575.535a2.661 2.661 0 0 1-1.576-.535c-.479-.35-.877-.855-1.154-1.462"
      stroke="currentColor"
    />
  </Svg>
);

export default SvgComponent;
