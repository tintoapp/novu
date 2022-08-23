import { Loader as MantineLoader } from '@mantine/core';
import React from 'react';
import { useNovuThemeProvider } from '@novu/notification-center/src/hooks/use-novu-theme-provider.hook';
import styled from 'styled-components/native';

export const Loader = ({ color }: { color?: string }) => {
  const { theme } = useNovuThemeProvider();
  const loaderColor = color || theme.loaderColor;

  return (
    <Container>
      <MantineLoader color={loaderColor} />
    </Container>
  );
};

const Container = styled.View`
  text-align: center;
  min-height: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;
