import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FooterInternal from '../components/internal/Footer';
import Button from '../components/internal/Button';
import LinkButton from '../components/internal/LinkButton';
import Panel from '../components/internal/Panel';
import Pagination from '../components/internal/Pagination';
import SelectMultipleInput from '../components/internal/SelectMultipleInput';
import TextInput from '../components/internal/TextInput';
import TextInputRange from '../components/internal/TextInputRange';
import './css/internal_ons_css.css';

storiesOf('Footer (Internal)', module)
  .add('Default Footer with feedbacl', withInfo()(() =>
    (<FooterInternal />),
  ));

storiesOf('Panel (Internal)', module)
  .add('Panel', withInfo()(() =>
    (<Panel
      id="Panel"
      text="PanelPanelPanel"
      level="level 1"
    />),
  ));

storiesOf('Button (Internal)', module)
  .add('Normal Button', withInfo()(() =>
    (<Button
      id="loginButton"
      size="wide"
      text="Login"
      onClick={() => alert('Clicked login button...')}
      ariaLabel="Login Button"
      type="submit"
    />),
  ));

storiesOf('Link Button (Internal)', module)
  .add('Normal Link Button', withInfo()(() =>
    (<LinkButton
      id="LinkButton"
      text="This is the link"
    />),
  ));

storiesOf('Pagination (Internal)', module)
  .add('Pages Changes', withInfo()(() =>
    (<Pagination
      onChange={() => alert('Switch Page...')}
      page={3}
      pagesize={4}
      numPages={6}
    />),
  ));

storiesOf('Select Multiple Input (Internal)', module)
  .add('Decisions', withInfo()(() =>
  (<SelectMultipleInput
    id="SelectMultipleInput"
    label="Label"
    size="42"
    bands={{
      A: 'Active',
      C: 'Closed',
      D: 'Dormant',
      I: 'Insolvent',
    }}
    onChange={() => alert('Selection Made')}
  />),
  ));

storiesOf('Text Input (Internal)', module)
  .add('Text Input', withInfo()(() =>
  (<TextInput
    id="id"
    type="type"
    label="Input"
    size="size"
  />),
  ));

storiesOf('Text Input Range (Internal)', module)
  .add('The Text Input Range', withInfo()(() => {
    let value = '';
    return (<TextInputRange
      id="id"
      label="Input Text"
      size="26262"
      toggleText="Two Inputs?"
      value={value}
      onChange={(e) => value = e.target.value}
    />);
  }));
