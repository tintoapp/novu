import * as React from 'react';
import Svg, { SvgProps, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { INotificationBellColors } from '@novu/notification-center/src/store/novu-theme.context';

interface IGradientDotProps {
  props?: SvgProps;
  colors: INotificationBellColors;
}

const SvgComponent = (props: IGradientDotProps) => {
  const color = props.colors.unseenBadgeColor;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
      <Rect
        x={1.5}
        y={1.5}
        width={13}
        height={13}
        rx={6.5}
        fill="url(#a)"
        stroke={props.colors.unseenBadgeBackgroundColor}
      />
      <Defs>
        <LinearGradient id="a" x1={8} y1={13} x2={8} y2={3} gradientUnits="userSpaceOnUse">
          <Stop stopColor={typeof color === 'string' ? color : color.stopColor} />
          <Stop offset={1} stopColor={typeof color === 'string' ? color : color.stopColorOffset} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
