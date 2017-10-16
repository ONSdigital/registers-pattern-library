import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Header from '../components/Header';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {
  it('to have one `.test-header`s', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.test-header')).to.have.length(1);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Header bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('calls componentDidMount', () => {
    sinon.spy(Header.prototype, 'componentDidMount');
    const wrapper = mount(<Header />);
    expect(Header.prototype.componentDidMount.calledOnce).to.be.true;
    Header.prototype.componentDidMount.restore();
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {
  it('renders one `.test-header`s', () => {
    const wrapper = render(<Header />);
    expect(wrapper.find('.test-header').length).to.equal(1);
  });
});
