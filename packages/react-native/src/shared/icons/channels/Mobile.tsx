import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M15 22.5h.01m-6.26-20h12.5a2.5 2.5 0 0 1 2.5 2.5v20a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5Z"
      stroke="currentColor"
    />
  </Svg>
);

export default SvgComponent;
