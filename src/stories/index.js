import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import BreadCrumb from '../components/BreadCrumb';
// import { MemoryRouter } from 'react-router';

import './ons_css.css';

storiesOf('Header', module)
  .add('with text', withInfo('doc string about my component')(() =>
    <Header />,
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

