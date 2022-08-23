/* eslint-disable max-len */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M20.625 15.5c0 1.055.82 1.875 1.875 1.875 1.016 0 1.875-.82 1.875-1.875 0-1.016-.86-1.875-1.875-1.875-1.055 0-1.875.86-1.875 1.875Zm-11.25 0c0-1.016-.86-1.875-1.875-1.875-1.055 0-1.875.86-1.875 1.875 0 1.055.82 1.875 1.875 1.875 1.016 0 1.875-.82 1.875-1.875Zm7.5 0c0-1.016-.86-1.875-1.875-1.875-1.055 0-1.875.86-1.875 1.875 0 1.055.82 1.875 1.875 1.875 1.016 0 1.875-.82 1.875-1.875Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
