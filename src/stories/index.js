import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import BreadCrumb from '../components/BreadCrumb';
import Button from '../components/Button';
// import { MemoryRouter } from 'react-router';

import './ons_css.css';

storiesOf('Header', module)
  .add('with links (when logged in)', withInfo('doc string about my component')(() =>
    (<Header
      showHeaderItems
      headerLinks={[
        { text: 'User Details', link: '/UserDetails' },
        { text: 'Information', link: '/TechnicalInformation' },
      ]}
      imageUrl="/Home"
    />
    ),
  ))
  .add('with links + button (when logged in)', withInfo('doc string about my component')(() =>
  (<Header
    showHeaderItems
    headerLinks={[
      { text: 'User Details', link: '/UserDetails' },
      { text: 'Information', link: '/TechnicalInformation' },
    ]}
    imageUrl="/Home"
  >
    <Button
      id="logoutButton"
      size="thin"
      text="Logout"
      onClick={() => alert('Clicked logout button...')}
      ariaLabel="Logout Button"
      type="submit"
    />
  </Header>
  ),
))
  .add('without links (not logged in)', withInfo('doc string about my component')(() =>
    (<Header
      showHeaderItems={false}
      imageUrl="/Home"
    />),
  ));

storiesOf('Footer', module)
  .add('with text', withInfo('doc string about my component')(() =>
    <Footer />,
  ));

storiesOf('NavBar', module)
  .add('with text', withInfo('doc string about my component')(() =>
    <NavBar primary="/Home" />,
  ));

storiesOf('BreadCrumb', module)
  .add('with text', withInfo('doc string about my component')(() =>
    (<BreadCrumb
      breadCrumbItems={[
        { name: 'Enterprise', link: '' },
        { name: '123456789', link: '/Enterprises/123456789' },
        { name: 'Legal Unit', link: '' },
        { name: '987654321', link: '/LegalUnits/987654321' },
      ]}
    />),
  ));

storiesOf('Button', module)
  .add('normal button', withInfo('doc string about my component')(() =>
    (<Button
      id="loginButton"
      size="wide"
      text="Login"
      onClick={() => alert('Clicked login button...')}
      ariaLabel="Login Button"
      type="submit"
    />),
  ))
  .add('button with loading spinner', withInfo('doc string about my component')(() => {
    return (<Button
      id="loginButton"
      size="wide"
      text="Login"
      onClick={() => alert('Clicked login button...')}
      ariaLabel="Login Button"
      type="submit"
      loading
    />);
  }));

// storiesOf('Footer', module)
//   .addDecorator(story => (
//     <MemoryRouter initialEntries={['/Accessibility', '/SearchHistory', '/WhatIsSbr']}>
//       {story()}
//     </MemoryRouter>
//   ))
//   .add('homepage', () => {
//     // mockedTasks.inbox = inboxTasks;
//     // mockedTasks.pinned = pinnedTasks;
//     return <Footer />;
//   });

