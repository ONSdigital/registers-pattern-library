import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Button from '../../components/internal/Button';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Button - Shallow Rendering', () => {
  it('to have 1 .btn class', () => {
    const wrapper = shallow(
      <Button
        id="loginButton"
        size="wide"
        text="Login"
        onClick={() => alert('Clicked login button...')}
        ariaLabel="Login Button"
        type="submit"
        className="btn btn--primary venus btn--wide"
      />,
    );
    expect(wrapper.find('.btn')).to.have.length(1);
  });

  it('to be the correct size', () => {
    const wrapper = shallow(
      <Button
        id="loginButton"
        size="wide"
        text="Login"
        onClick={() => alert('Clicked login button...')}
        ariaLabel="Login Button"
        type="submit"
        className="btn btn--primary venus btn--wide"
      />,
    );
    expect(wrapper.find('.btn').hasClass('btn--wide')).to.equal(true);
  });

  it('to have the correct text', () => {
    const wrapper = shallow(
      <Button
        id="loginButton"
        size="wide"
        text="Login"
        onClick={() => alert('Clicked login button...')}
        ariaLabel="Login Button"
        type="submit"
      />,
    );
    expect(wrapper.text()).to.equal('Login');
  });

  it('to show the loading spinner', () => {
    const wrapper = shallow(
      <Button
        id="loginButton"
        size="wide"
        text="Login"
        onClick={() => alert('Clicked login button...')}
        ariaLabel="Login Button"
        type="submit"
        loading
      />,
    );
    expect(wrapper.find('#spinner')).to.have.length(1);
  });

  it('to check if the onClick method runs when loading spinner is showing', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Button
        iid="loginButton"
        size="wide"
        text="Login"
        onClick={onButtonClick}
        ariaLabel="Login Button"
        type="submit"
        loading
      />,
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(false);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Button - Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(
      <Button
        id="loginButton"
        size="wide"
        text="Login"
        onClick={() => alert('Clicked login button...')}
        ariaLabel="Login Button"
        type="submit"
        loading
      />,
    );
    expect(wrapper.props().loading).to.equal(true);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('to should handle click event', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <Button
        id="loginButton"
        size="wide"
        text="Login"
        onClick={onButtonClick}
        ariaLabel="Login Button"
        type="submit"
        loading={false}
      />,
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Button - Static Rendered Markup', () => {
  it('renders the Button', () => {
    const wrapper = render(
      <Button
        id="loginButton"
        size="wide"
        text="Login"
        onClick={() => alert('Clicked login button...')}
        ariaLabel="Login Button"
        type="submit"
        className="btn btn--primary venus btn--wide"
      />,
    );
    expect(wrapper.find('.btn').length).to.equal(1);
  });
});
