import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Panel from '../../components/internal/Panel';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Panel - Shallow Rendering', () => {
    it('to have 1 Panel class', () => {
      const wrapper = shallow(
        <Panel
          id="Panel"
          text="PanelPanelPanel"
          level="level 1"
        />,
      );
      expect(wrapper.find('.mars')).to.have.length(1);
    });
});

  // Static Rendered Markup
  // https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Panel - Static Rendered Markup', () => {
    it('renders the Panel', () => {
      const wrapper = render(
        <Panel
          id="Panel"
          text="PanelPanelPanel"
          level="level 1"
        />,
      );
      expect(wrapper.find('.mars').length).to.equal(1);
    });
});
