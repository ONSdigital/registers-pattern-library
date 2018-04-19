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
  .add('Default Footer with feedback', withInfo()(() =>
    (<FooterInternal />),
  ));

storiesOf('Panel (Internal)', module)
  .add('Panel', withInfo()(() =>
    (<Panel
      id="Panel"
      text="Information Here"
      level="info"
      close={() => 1}
      show
    />),
  ));

storiesOf('Button (Internal)', module)
  .add('Login Button', withInfo()(() =>
    (<Button
      id="loginButton"
      className="btn btn--primary venus btn--wide"
      size="wide"
      text="Login"
      onClick={() => alert('Clicked login button...')}
      ariaLabel="Login Button"
      type="submit"
    />),
  ))
  .add('Clear Button', withInfo()(() =>
    (<Button
      id="loginButton"
      className="btn btn--secondary btn--border"
      size="wide"
      text="Clear"
      onClick={() => alert('Clear')}
      ariaLabel="Clear Button"
      type="submit"
    />),
  ))
    .add('Button with loading spinner', withInfo()(() => {
      return (<Button
        id="loginButton"
        className="btn btn--primary venus btn--wide"
        size="wide"
        text="Login"
        onClick={() => alert('Clicked login button...')}
        ariaLabel="Login Button"
        type="submit"
        loading
      />);
    }));

storiesOf('Link Button (Internal)', module)
  .add('Link Button', withInfo()(() => {
    return (<LinkButton
      id="LinkButton"
      text="This is the link"
      className="username"
    />);
  }))
  .add('Link Button spinner', withInfo()(() => {
    return (<div style={{ backgroundColor: 'blue' }}><LinkButton
      id="LinkButton"
      text="This is the link"
      className="username"
      loading
    /></div>);
  }));

storiesOf('Pagination (Internal)', module)
  .add('Pagination', withInfo()(() =>
    (<Pagination
      onChange={() => alert('Pagination')}
      page={3}
      pageSize={4}
      numPages={6}
    />),
  ));

storiesOf('Select Multiple Input (Internal)', module)
  .add('Select Multiple Input', withInfo()(() =>
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
    labelClass="label neptune"
  />),
  ));

storiesOf('Text Input (Internal)', module)
  .add('Text Input', withInfo()(() =>
  (<TextInput
    id="id"
    type="type"
    label="Input"
    size="size"
    labelClass="label neptune"
  />),
  ));

storiesOf('Text Input Range (Internal)', module)
  .add('Text Input Range', withInfo()(() => {
    let value = {
      min: '',
      max: '',
      single: '',
    };
    return (<TextInputRange
      id="id"
      label="Input Text"
      size="26262"
      toggleText="Search Range"
      value={value}
      onChange={(e) => value = e.target.value}
      labelClass="label neptune"
    />);
  }));
