import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Header from '../components/Header';

storiesOf('Header', module)
  .add('with text', withInfo('doc string about my component')(() =>
    <Header />,
  ));
