/* eslint-disable max-len */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M25 19.333a1.98 1.98 0 0 1-.65 1.454 2.317 2.317 0 0 1-1.572.602H9.444L5 25V9.056c0-.546.234-1.068.65-1.454A2.317 2.317 0 0 1 7.223 7h15.556c.59 0 1.154.217 1.571.602.417.386.651.908.651 1.454v10.277Z"
      stroke="currentColor"
    />
  </Svg>
);

export default SvgComponent;
