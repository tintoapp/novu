import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import {Layout} from '@novu/react-native';

storiesOf('Layout', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => <Layout />);
