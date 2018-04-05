import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import LinkButton from '../../components/internal/LinkButton';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('LinkButton - Shallow Rendering', () => {
    it('to have 1 LinkButton class', () => {
      const wrapper = shallow(
        <LinkButton
          id="LinkButton"
          text="This is the link"
          className="LinkClass"
        />,
      );
      expect(wrapper.find('.LinkClass')).to.have.length(1);
    });
});

  // Static Rendered Markup
  // https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('LinkButton - Static Rendered Markup', () => {
    it('renders the LinkButton', () => {
      const wrapper = render(
        <LinkButton
          id="LinkButton"
          text="This is the link"
          className="LinkClass"
        />,
      );
      expect(wrapper.find('.LinkClass').length).to.equal(1);
    });
});
 