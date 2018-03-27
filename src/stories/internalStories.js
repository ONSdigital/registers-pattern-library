import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FooterInternal from '../components/internal/Footer';
import './css/internal_ons_css.css';

storiesOf('Footer (Internal)', module)
  .add('Default Footer with feedbacl', withInfo()(() =>
    (<FooterInternal />),
  ));
