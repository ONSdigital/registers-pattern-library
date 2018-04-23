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
import { tradingStatusBands } from '../utils/convertBands';
import ONSLogo from '../resources/img/logo.svg';

storiesOf('Full Page Examples (Internal)', module)
  .add('Full Page', withInfo()(() =>
      <section>
        <header className="page__header">
          <div className="logo_container">
            <div className="wrapper">
              <div className="group">
                <div className="col-7">
                  <div className="logo_header">
                    <a onClick={() => history.push('/Home')} style={{ cursor: 'pointer' }}>
                      <img src={ONSLogo} alt="Office for National Statistics" className="logo__img" />
                    </a>
                  </div>
                </div>
                <div className="col-5">
                  <div className="header_links">
                    <ul className="menubar" role="menubar" id="appmenu">
                      <li className="menubar" role="menuitem">
                        <LinkButton id="logoutLink" className="username" text="Sign out" onClick={() => alert('Logout')} loading={false} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page_title">
            <div className="wrapper">
              <div className="group">
                <div className="col-12">
                  <h1 className="jupiter main_heading">Business Index</h1>
                  <h2 style={{ marginTop: '0px' }} className="neptune sub_heading">A list of UK businesses for statistical use across government</h2>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="main-content">
            <div className="wrapper">
              <div className="group">
                <div className="col-12">
                  <form id="form-sign-in" className="form">
                    <h3 className="saturn">Page Content</h3>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterInternal />
      </section>),
  );

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
  .add('Button with loading spinner', withInfo()(() =>
    (<Button
      id="loginButton"
      className="btn btn--primary venus btn--wide"
      size="wide"
      text="Login"
      onClick={() => alert('Clicked login button...')}
      ariaLabel="Login Button"
      type="submit"
      loading
    />),
  ));

storiesOf('Link Button (Internal)', module)
  .add('Link Button', withInfo()(() =>
    (<LinkButton
      id="LinkButton"
      text="This is the link"
      className="username"
    />),
  ))
  .add('Link Button spinner', withInfo()(() => 
    (<div style={{ backgroundColor: '#3B7A9E', width: '100px' }}><LinkButton
      id="LinkButton"
      text="This is the link"
      className="username"
      loading
    /></div>),
  ));

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
      label="Trading Status Bands"
      size="42"
      bands={tradingStatusBands}
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
      size="u-mb-s"
      toggleText="Search Range"
      value={value}
      onChange={(e) => value = e.target.value}
      labelClass="label neptune"
    />);
  }));
