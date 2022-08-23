import React, { useContext } from 'react';
import { colors } from '@novu/notification-center/src/shared/config/colors';
import { Bell as BellIcon, GradientDot } from '../../shared/icons';
import { ActionIcon } from '@mantine/core';
import styled from 'styled-components';
import { UnseenCountContext } from '@novu/notification-center/src/store/unseen-count.context';
import { ColorScheme } from '@novu/notification-center';
import { ISvgStopColor } from '@novu/notification-center/src/store/novu-theme.context';
import { useDefaultBellColors } from '@novu/notification-center/src/hooks';

const headerIconsSettings = { color: colors.B60, width: 30, height: 30 };

export interface INotificationBellProps {
  unseenCount?: number;
  unseenBadgeColor?: string | ISvgStopColor;
  unseenBadgeBackgroundColor?: string;
  colorScheme?: ColorScheme;
}

export function NotificationBell(props: INotificationBellProps) {
  const { unseenCount } = useContext(UnseenCountContext);
  const { bellColors } = useDefaultBellColors({
    unseenBadgeColor: props?.unseenBadgeColor,
    unseenBadgeBackgroundColor: props?.unseenBadgeBackgroundColor,
    colorScheme: props?.colorScheme,
  });

  return (
    <ActionIcon variant="transparent" data-test-id="notification-bell">
      <BellIcon {...headerIconsSettings} />
      {unseenCount > 0 ? <StyledGradientDot bellColors={bellColors} /> : null}
    </ActionIcon>
  );
}

export function GradientDotWrap({ bellColors, ...props }) {
  return <GradientDot {...props} colors={bellColors} />;
}

const StyledGradientDot = styled(GradientDotWrap)`
  position: absolute;
  top: -3%;
  right: 10%;
  width: 12px;
  height: 12px;
`;
