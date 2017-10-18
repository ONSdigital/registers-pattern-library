import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Banner from '../components/Banner';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Banner - Shallow Rendering', () => {
  it('to have 1 #banner id', () => {
    const wrapper = shallow(
      <Banner
        text="ALPHA"
        message="this release is still in development."
      />,
    );
    expect(wrapper.find('#banner')).to.have.length(1);
  });

  it('to have 1 strong element', () => {
    const wrapper = shallow(
      <Banner
        text="ALPHA"
        message="this release is still in development."
      />,
    );
    expect(wrapper.find('strong')).to.have.length(1);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Banner - Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(
      <Banner
        text="ALPHA"
        message="this release is still in development."
      />,
    );
    expect(wrapper.props().text).to.equal('ALPHA');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('calls componentDidMount', () => {
    sinon.spy(Banner.prototype, 'componentDidMount');
    const wrapper = mount(
      <Banner
        text="ALPHA"
        message="this release is still in development."
      />,
    );
    expect(Banner.prototype.componentDidMount.calledOnce).to.be.true;
    Banner.prototype.componentDidMount.restore();
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Banner - Static Rendered Markup', () => {
  it('renders the banner', () => {
    const wrapper = render(
      <Banner
        text="ALPHA"
        message="this release is still in development."
      />,
    );
    expect(wrapper.find('#banner').length).to.equal(1);
  });
});