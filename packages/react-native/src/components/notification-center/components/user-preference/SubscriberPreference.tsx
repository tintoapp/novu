import React, { useState } from 'react';
import { Accordion, Divider } from '@mantine/core';
import styled from 'styled-components/native';
import { useNovuThemeProvider, useSubscriberPreference } from '@novu/notification-center/src/hooks';
import { accordionStyles, Text, TextBlock } from './styles';
import { ChannelPreference } from './ChannelPreference';
import { getChannel } from './channels';
// import image from '@novu/notification-center/src/images/no-settings.png';

export function SubscriberPreference() {
  const { theme, common } = useNovuThemeProvider();
  const { preferences: data, updatePreference, loading } = useSubscriberPreference();
  const baseTheme = theme?.userPreferences;
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  const preferences = data
    ?.filter((item) => !item.template.critical)
    ?.filter((pref) => Object.keys(pref.preference.channels).length > 0);

  return (
    <>
      {!loading && preferences?.length === 0 && (
        <ImageContainer>{/* <Logo src={image} alt="logo" /> */}</ImageContainer>
      )}
      <AccordionContainer>
        <Accordion iconPosition="right" styles={accordionStyles(baseTheme, common.fontFamily)}>
          {preferences?.map((item, index) => {
            const channelsKeys = Object.keys(item?.preference?.channels);
            const channelsPreference = item?.preference?.channels;

            const handleUpdateChannelPreference = async (type: string, checked: boolean) => {
              setLoadingUpdate(true);
              await updatePreference(item, type, checked, index);
              setLoadingUpdate(false);
            };

            return (
              <Accordion.Item
                key={index}
                data-test-id="workflow-list-item"
                label={
                  <WorkflowHeader
                    theme={baseTheme}
                    label={item.template?.name}
                    channels={getEnabledChannels(channelsPreference)}
                  />
                }
              >
                <ChannelsWrapper>
                  <Divider style={{ borderTopColor: baseTheme?.accordion?.dividerColor }} />
                  {channelsKeys.map((key) => (
                    <ChannelPreference
                      key={key}
                      type={key}
                      active={channelsPreference[key]}
                      disabled={loadingUpdate}
                      handleUpdateChannelPreference={handleUpdateChannelPreference}
                    />
                  ))}
                </ChannelsWrapper>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </AccordionContainer>
    </>
  );
}

function WorkflowHeader({ label, channels, theme }) {
  return (
    <TextBlock>
      <Text size={'lg'} color={theme?.accordion?.fontColor}>
        {label}
      </Text>
      <Text data-test-id="workflow-active-channels" size={'sm'} color={theme?.accordion?.secondaryFontColor}>
        {channels}
      </Text>
    </TextBlock>
  );
}

function getEnabledChannels(channels) {
  const keys = Object.keys(channels);
  const list = keys.filter((key) => channels[key]).map((channel) => getChannel(channel).label);

  return list.join(', ');
}

const ChannelsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 20px;
`;

const ImageContainer = styled.View`
  text-align: center;
  min-height: 350;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccordionContainer = styled.View`
  padding: 15px;
`;

const Logo = styled.Image`
  max-width: 300px;
`;
