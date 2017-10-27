import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Footer from '../components/Footer';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Footer - Shallow Rendering', () => {
  it('to have 1 footer class', () => {
    const wrapper = shallow(
      <Footer
        footerSection={[
          { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
          { title: 'About SBR', items: [{ text: 'What is SBR', link: '/WhatIsSbr' }] },
          { title: 'Connect with us', items: [{ text: 'statistical.business.register@ons.gov.uk', emailHref: 'mailto:statistical.business.register@ons.gov.uk?subject=SBR&body=message%20goes%20here' }] },
        ]}
      />,
    );
    expect(wrapper.find('.footer')).to.have.length(1);
  });

  it('to have the correct number of children', () => {
    const wrapper = shallow(
      <Footer
        footerSection={[
          { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
          { title: 'About SBR', items: [{ text: 'What is SBR', link: '/WhatIsSbr' }] },
          { title: 'Connect with us', items: [{ text: 'statistical.business.register@ons.gov.uk', emailHref: 'mailto:statistical.business.register@ons.gov.uk?subject=SBR&body=message%20goes%20here' }] },
        ]}
      />,
    );
    // This is for top level children, i.e. the 1/3 sections
    expect(wrapper.find('.footer-nav__list')).to.have.length(3);
  });

  it('to have the correct number of nested children', () => {
    const wrapper = shallow(
      <Footer
        footerSection={[
          { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
          { title: 'About SBR', items: [{ text: 'What is SBR', link: '/WhatIsSbr' }] },
          { title: 'Connect with us', items: [{ text: 'statistical.business.register@ons.gov.uk', emailHref: 'mailto:statistical.business.register@ons.gov.uk?subject=SBR&body=message%20goes%20here' }] },
        ]}
      />,
    );
    expect(wrapper.find('.footer-nav__item')).to.have.length(4);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Footer - Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const footerItems = [
      { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
      { title: 'About SBR', items: [{ text: 'What is SBR', link: '/WhatIsSbr' }] },
      { title: 'Connect with us', items: [{ text: 'statistical.business.register@ons.gov.uk', emailHref: 'mailto:statistical.business.register@ons.gov.uk?subject=SBR&body=message%20goes%20here' }] },
    ];
    const wrapper = mount(
      <Footer
        footerSection={footerItems}
      />,
    );
    expect(wrapper.props().footerSection).to.equal(footerItems);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Footer - Static Rendered Markup', () => {
  it('renders the Footer', () => {
    const wrapper = render(
      <Footer
        footerSection={[
          { title: 'Help', items: [{ text: 'Accessibility', link: '/Accessibility' }, { text: 'Search History', link: '/SearchHistory' }] },
          { title: 'About SBR', items: [{ text: 'What is SBR', link: '/WhatIsSbr' }] },
          { title: 'Connect with us', items: [{ text: 'statistical.business.register@ons.gov.uk', emailHref: 'mailto:statistical.business.register@ons.gov.uk?subject=SBR&body=message%20goes%20here' }] },
        ]}
      />,
    );
    expect(wrapper.find('.footer').length).to.equal(1);
  });
});
