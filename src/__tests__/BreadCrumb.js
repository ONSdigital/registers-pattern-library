import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import BreadCrumb from '../components/BreadCrumb';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {
  it('to have one `.test-header`s', () => {
    const wrapper = shallow(<BreadCrumb />);
    expect(wrapper.find('.test-header')).to.have.length(1);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<BreadCrumb bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('calls componentDidMount', () => {
    sinon.spy(BreadCrumb.prototype, 'componentDidMount');
    const wrapper = mount(<BreadCrumb />);
    expect(BreadCrumb.prototype.componentDidMount.calledOnce).to.be.true;
    BreadCrumb.prototype.componentDidMount.restore();
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {
  it('renders one `.test-header`s', () => {
    const wrapper = render(<BreadCrumb />);
    expect(wrapper.find('.test-header').length).to.equal(1);
  });
});
