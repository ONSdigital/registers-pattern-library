import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import BreadCrumb from '../components/BreadCrumb';
import Button from '../components/Button';
import Banner from '../components/Banner';
import TitleAndDescription from '../components/TitleAndDescription';
// import { MemoryRouter } from 'react-router';

import './ons_css.css';

storiesOf('Full Page Examples', module)
  .add('full page', withInfo('doc string about my component')(() => {
    return (
      <div>
        <Banner
          text="ALPHA"
          message="this release is still in development."
        />
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
        <NavBar
          primary="/Home"
          navBarItems={[
            { text: 'Home', link: '/Home' },
            { text: 'Search', link: '/RefSearch' },
          ]}
        />
        <BreadCrumb
          breadCrumbItems={[
            { name: 'Home', link: '/Home' },
            { name: 'Accessibility', link: '' },
          ]}
        />
        <TitleAndDescription
          title="Accessibility"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
          marginBottom={1}
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
  .add('with normal links', withInfo('doc string about my component')(() =>
    (<NavBar
      primary="/Home"
      navBarItems={[
        { text: 'Home', link: '/Home' },
        { text: 'Search', link: '/RefSearch' },
      ]}
    />),
  ))
  .add('with normal and dropdown links', withInfo('doc string about my component')(() =>
    (<NavBar
      primary="/Home"
      navBarItems={[
        { text: 'Home', link: '/Home' },
        { text: 'Search', link: '/Search' },
        { text: 'Unit Search', link: '/RefSearch', items: [{ text: 'Enterprise', link: '/Enterprise' }, { text: 'Legal Unit', link: '/LegalUnit' }, { text: 'VAT', link: '/VAT' }] },
      ]}
    />),
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
  .add('thin button', withInfo('doc string about my component')(() =>
    (<Button
      id="loginButton"
      size="thin"
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

storiesOf('Banner', module)
  .add('alpha banner with message', withInfo('doc string about my component')(() =>
    (<Banner
      text="ALPHA"
      message="this release is still in development."
    />),
  ))
  .add('beta banner', withInfo('doc string about my component')(() =>
    (<Banner
      text="BETA"
    />),
  ))
  .add('alpha banner with message and custom colour', withInfo('doc string about my component')(() =>
    (<Banner
      text="ALPHA"
      message="this release is still in development."
      backgroundColour="#D32F2F"
    />),
  ));

storiesOf('Title and Description', module)
  .add('Title with description and margin bottom', withInfo('doc string about my component')(() =>
    (<TitleAndDescription
      title="Accessibility"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
      marginBottom="1"
    />),
  ))
  .add('Title and no description', withInfo('doc string about my component')(() =>
    (<TitleAndDescription
      title="Accessibility"
      marginBottom="0"
    />),
  ));

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

