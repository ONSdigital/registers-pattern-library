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

storiesOf('Full Page Example', module)
  .add('full page', withInfo('doc string about my component')(() => {
    return (
      <div>
        <Header
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
        <NavBar primary="/Home" />
        <BreadCrumb
          breadCrumbItems={[
            { name: 'Home', link: '/Home' },
            { name: 'Enterprise', link: '' },
            { name: '123456789', link: '/Enterprises/123456789' },
            { name: 'Legal Unit', link: '' },
            { name: '987654321', link: '/LegalUnits/987654321' },
          ]}
        />
        <Footer
          footerSection={[
            { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
            { title: 'About SBR', items: [{ text: 'What is SBR', link: '/WhatIsSbr' }] },
            { title: 'Connect with us', items: [{ text: 'statistical.business.register@ons.gov.uk', emailHref: 'mailto:statistical.business.register@ons.gov.uk?subject=SBR&body=message%20goes%20here' }] },
          ]}
        />
      </div>
    );
  }));

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
    </Header>),
  ))
  .add('without links (not logged in)', withInfo('doc string about my component')(() =>
    (<Header
      showHeaderItems={false}
      imageUrl="/Home"
    />),
  ));

storiesOf('Footer', module)
  .add('links and email section', withInfo('doc string about my component')(() =>
    (<Footer
      footerSection={[
        { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
        { title: 'About SBR', items: [{ text: 'What is SBR', link: '/WhatIsSbr' }] },
        { title: 'Connect with us', items: [{ text: 'statistical.business.register@ons.gov.uk', emailHref: 'mailto:statistical.business.register@ons.gov.uk?subject=SBR&body=message%20goes%20here' }] },
      ]}
    />),
  ))
  .add('just links', withInfo('doc string about my component')(() =>
    (<Footer
      footerSection={[
        { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
        { title: 'Support', items: [{ text: 'Support', link: '/Support' }] },
        { title: 'Features', items: [{ text: 'Reference Search', link: '/RefSearch' }] },
      ]}
    />),
  ));

storiesOf('NavBar', module)
  .add('with text', withInfo('doc string about my component')(() =>
    <NavBar primary="/Home" />,
  ));

storiesOf('BreadCrumb', module)
  .add('with mix of links and text', withInfo('doc string about my component')(() =>
    (<BreadCrumb
      breadCrumbItems={[
        { name: 'Home', link: '/Home' },
        { name: 'Enterprise', link: '' },
        { name: '123456789', link: '/Enterprises/123456789' },
        { name: 'Legal Unit', link: '' },
        { name: '987654321', link: '/LegalUnits/987654321' },
      ]}
    />),
  ))
  .add('with just text', withInfo('doc string about my component')(() =>
    (<BreadCrumb
      breadCrumbItems={[
        { name: 'Home', link: '' },
        { name: 'Reference Search', link: '' },
      ]}
    />),
  ))
  .add('with just links', withInfo('doc string about my component')(() =>
    (<BreadCrumb
      breadCrumbItems={[
        { name: 'Home', link: '/Home' },
        { name: 'Reference Search', link: '/RefSearch' },
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

