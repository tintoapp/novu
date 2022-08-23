import React, { useState } from 'react';
import { useNovuThemeProvider } from '@novu/notification-center/src/hooks';
import { LoadingOverlay, Switch } from '@mantine/core';
import { getChannel } from './channels';
import styled from 'styled-components/native';
import { switchStyles, Text } from './styles';
import { Check } from '@novu/notification-center/src/shared/icons/Check';
import { colors } from '@novu/notification-center/src/shared/config/colors';

interface IChannelPreferenceProps {
  type: string;
  active: boolean;
  handleUpdateChannelPreference: (type: string, checked: boolean) => void;
  disabled: boolean;
}
export function ChannelPreference({ type, active, disabled, handleUpdateChannelPreference }: IChannelPreferenceProps) {
  const { label, Icon } = getChannel(type);
  const { theme } = useNovuThemeProvider();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSaved, setShowSaved] = useState<boolean>(false);
  const baseTheme = theme?.userPreferences;
  const iconColor = baseTheme?.accordionItem?.icon;
  const fontColor = baseTheme?.accordionItem?.fontColor;

  const updateChannel = async (checked: boolean) => {
    setIsLoading(true);

    handleUpdateChannelPreference(type, checked);

    setIsLoading(false);

    setShowSaved(true);
    setTimeout(() => {
      setShowSaved(false);
    }, 1500);
  };

  return (
    <ChannelItemWrapper data-test-id="channel-preference-item">
      <LeftContentWrapper>
        <Icon color={active ? iconColor.active : iconColor.inactive} style={{ width: '30px' }} />
        <Text size={'md'} color={active ? fontColor.active : fontColor.inactive}>
          {label}
        </Text>
      </LeftContentWrapper>
      <RightContentWrapper>
        {showSaved && (
          <SavedWrapper>
            <Check color={colors.success} />
            <Text size="sm" color={colors.success}>
              Saved
            </Text>
          </SavedWrapper>
        )}
        <SwitchWrapper>
          <LoadingOverlay
            visible={isLoading}
            data-test-id="channel-preference-item-loader"
            loaderProps={{
              size: 'xs',
              color: theme.loaderColor,
            }}
            overlayOpacity={0.3}
            overlayColor="transparent"
            sx={{ justifyContent: active ? 'right' : 'left', marginLeft: '2.5px', marginRight: '2px' }}
          />
          <Switch
            data-test-id="channel-preference-item-toggle"
            styles={switchStyles(baseTheme)}
            disabled={disabled && !isLoading}
            checked={active}
            onChange={(e) => updateChannel(e.target.checked)}
          />
        </SwitchWrapper>
      </RightContentWrapper>
    </ChannelItemWrapper>
  );
}

const ChannelItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftContentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

const RightContentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;
`;

const SwitchWrapper = styled.View`
  width: inherit;
  height: inherit;
  position: relative;

  svg circle {
    stroke-opacity: 0;
  }
`;

const SavedWrapper = styled.View`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
