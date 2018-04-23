import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import TextInputRange from '../../components/internal/TextInputRange';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('TextInputRange - Shallow Rendering', () => {
  it('to have 1 TextInputRange class', () => {
    const wrapper = shallow(
      <TextInputRange
        id="id"
        label="Input Text"
        size="u-mb-s"
        toggleText="Two Inputs?"
      />,
    );
    expect(wrapper.find('.field')).to.have.length(1);
  });

  it('to have two inputs', () => {
    const wrapper = shallow(
      <TextInputRange
        id="id"
        label="Input Text"
        size="u-mb-s"
        toggleText="Two Inputs?"
      />,
    );
    expect(wrapper.find('.input')).to.have.length(2);
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('TextInputRange - Static Rendered Markup', () => {
  it('renders the TextInputRange', () => {
    const wrapper = render(
      <TextInputRange
        id="id"
        label="Input Text"
        size="u-mb-s"
        toggleText="Two Inputs?"
      />,
    );
    expect(wrapper.find('.field').length).to.equal(1);
  });
});
