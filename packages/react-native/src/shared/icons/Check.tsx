/* eslint-disable max-len */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={12} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M6 .875A5.626 5.626 0 0 0 .375 6.5 5.611 5.611 0 0 0 6 12.125 5.626 5.626 0 0 0 11.625 6.5C11.625 3.406 9.094.875 6 .875Zm2.695 4.594-3 3a.554.554 0 0 1-.445.187c-.188 0-.352-.047-.469-.187l-1.5-1.5a.637.637 0 0 1 0-.914.637.637 0 0 1 .914 0l1.055 1.03 2.531-2.53a.637.637 0 0 1 .914 0 .637.637 0 0 1 0 .914Z"
      fill="#4D9980"
    />
  </Svg>
);

export default SvgComponent;
