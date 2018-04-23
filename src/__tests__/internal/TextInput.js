import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import TextInput from '../../components/internal/TextInput';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('TextInput - Shallow Rendering', () => {
  it('to have 1 TextInput class', () => {
    const wrapper = shallow(
      <TextInput
        id="id"
        type="type"
        label="Input"
        size="size"
      />,
    );
    expect(wrapper.find('.input')).to.have.length(1);
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('TextInput - Static Rendered Markup', () => {
  it('renders the TextInput', () => {
    const wrapper = render(
      <TextInput
        id="id"
        type="type"
        label="Input"
        size="size"
      />,
    );
    expect(wrapper.find('.input').length).to.equal(1);
  });
});
