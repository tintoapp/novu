/* eslint-disable max-len */
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={10} height={15} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M8.594.875c-.5-.5-1.281-.469-1.75.031l-5.5 5.75a1.226 1.226 0 0 0 0 1.719l5.5 5.75c.218.25.562.375.906.375.281 0 .594-.094.844-.344.5-.469.531-1.25.031-1.75L3.969 7.531l4.656-4.906c.5-.5.469-1.281-.031-1.75Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
