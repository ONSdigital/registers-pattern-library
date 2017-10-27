import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import BreadCrumb from '../components/BreadCrumb';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('BreadCrumb - Shallow Rendering', () => {
  it('to have 5 `.breadcrumb__item`s', () => {
    const wrapper = shallow(
      <BreadCrumb
        breadCrumbItems={[
          { name: 'Home', link: '/Home' },
          { name: 'Enterprise', link: '' },
          { name: '123456789', link: '/Enterprises/123456789' },
          { name: 'Legal Unit', link: '' },
          { name: '987654321', link: '/LegalUnits/987654321' },
        ]}
      />,
    );
    expect(wrapper.find('.breadcrumb__item')).to.have.length(5);
  });

  // BreadCrumb will only return a <Link> if the link JSON is empty
  it('to have 3 links', () => {
    const wrapper = shallow(
      <BreadCrumb
        breadCrumbItems={[
          { name: 'Home', link: '/Home' },
          { name: 'Enterprise', link: '' },
          { name: '123456789', link: '/Enterprises/123456789' },
          { name: 'Legal Unit', link: '' },
          { name: '987654321', link: '/LegalUnits/987654321' },
        ]}
      />,
    );
    expect(wrapper.find('Link')).to.have.length(3);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('BreadCrumb - Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const items = [
      { name: 'Home', link: '/Home' },
      { name: 'Reference Search', link: '' },
    ];
    const wrapper = mount(
      <BreadCrumb breadCrumbItems={items} />,
    );
    expect(wrapper.props().breadCrumbItems).to.equal(items);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('BreadCrumb - Static Rendered Markup', () => {
  it('renders 3 `.breadcrumb__item`s', () => {
    const wrapper = render(
      <BreadCrumb
        breadCrumbItems={[
          { name: 'Home', link: '/Home' },
          { name: 'Enterprise', link: '' },
          { name: '123456789', link: '/Enterprises/123456789' },
        ]}
      />,
    );
    expect(wrapper.find('.breadcrumb__item').length).to.equal(3);
  });
});
