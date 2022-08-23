import styled from 'styled-components/native';
import { Loader } from '../Loader';
import { HeaderContainer as Header } from './header/HeaderContainer';
import { FooterContainer as Footer } from './footer/FooterContainer';
import React, { useState } from 'react';
import { useNovuContext, useNovuThemeProvider } from '@novu/notification-center/src/hooks';
import { INovuTheme } from '@novu/notification-center/src/store/novu-theme.context';
import { shadows } from '@novu/notification-center/src/shared/config/shadows';
import { colors } from '@novu/notification-center/src/shared/config/colors';
import { UserPreferenceHeader } from './header/UserPreferenceHeader';
import { SubscriberPreference } from '../user-preference/SubscriberPreference';

export enum ScreensEnum {
  NOTIFICATIONS = 'notifications',
  SETTINGS = 'settings',
}

export function Layout({ children }: { children: JSX.Element }) {
  const { initialized } = useNovuContext();
  const { theme } = useNovuThemeProvider();
  const [screen, setScreen] = useState<ScreensEnum>(ScreensEnum.NOTIFICATIONS);

  return (
    <LayoutWrapper theme={theme}>
      {screen === ScreensEnum.SETTINGS && (
        <>
          <UserPreferenceHeader setScreen={setScreen} />
          <ContentWrapper>
            <SubscriberPreference />
          </ContentWrapper>
        </>
      )}
      {screen === ScreensEnum.NOTIFICATIONS && (
        <>
          <Header setScreen={setScreen} />
          <ContentWrapper>{initialized ? children : <Loader />}</ContentWrapper>
        </>
      )}

      <Footer />
    </LayoutWrapper>
  );
}

const ContentWrapper = styled.View`
  overflow: auto;
  min-height: 400px;
`;

const LayoutWrapper = styled.View<{ theme: INovuTheme }>`
  padding: 15px 0;
  height: auto;
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.layout?.boxShadow ?? shadows.medium};
  background: ${({ theme }) => theme.layout?.background ?? colors.white};
`;
