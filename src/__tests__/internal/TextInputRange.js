import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import TextInputRange from '../../components/internal/TextInputRange';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('TextInputRange - Shallow Rendering', () => {
    it('to have 1 TextInputRange class', () => {
      const wrapper = shallow(
        <TextInputRange
          id="id"
          label="Input Text"
          size="26262"
          toggleText="Two Inputs?"
        />,
      );
      expect(wrapper.find('.field')).to.have.length(1);
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
          size="26262"
          toggleText="Two Inputs?"
        />,
      );
      expect(wrapper.find('.field').length).to.equal(1);
    });
});
