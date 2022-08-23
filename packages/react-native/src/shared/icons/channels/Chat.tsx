import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M21 1 10 12M21 1l-7 20-4-9M21 1 1 8l9 4" stroke="currentColor" />
  </Svg>
);

export default SvgComponent;
