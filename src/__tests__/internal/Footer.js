import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import Footer from '../../components/internal/Footer';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Footer - Shallow Rendering', () => {
  it('to have 1 footer class', () => {
    const wrapper = shallow(
      <Footer />,
    );
    expect(wrapper.find('.page__footer')).to.have.length(1);
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Footer - Static Rendered Markup', () => {
  it('renders the Footer', () => {
    const wrapper = render(
      <Footer />,
    );
    expect(wrapper.find('.page__footer').length).to.equal(1);
  });
});
