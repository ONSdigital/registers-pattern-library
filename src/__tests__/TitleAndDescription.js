import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import TitleAndDescription from '../components/TitleAndDescription';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('TitleAndDescription - Shallow Rendering', () => {
  it('to have 1 Title class', () => {
    const wrapper = shallow(
      <TitleAndDescription
        title="Accessibility"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
        marginBottom={1}
      />,
    );
    expect(wrapper.find('.page-intro__title')).to.have.length(1);
  });

  it('to have the correct title text', () => {
    const wrapper = shallow(
      <TitleAndDescription
        title="Accessibility"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
        marginBottom={1}
      />,
    );
    expect(wrapper.find('.page-intro__title').text()).to.equal('Accessibility');
  });

  it('to have the correct description text', () => {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus.';
    const wrapper = shallow(
      <TitleAndDescription
        title="Accessibility"
        description={longText}
        marginBottom={1}
      />,
    );
    expect(wrapper.find('.page-intro__content').text()).to.equal(longText);
  });

  it('to have the correct margin bottom', () => {
    const wrapper = shallow(
      <TitleAndDescription
        title="Accessibility"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
        marginBottom={1}
      />,
    );
    expect(wrapper.find('.page-intro__content').hasClass('margin-bottom--1')).to.equal(true);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('TitleAndDescription - Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(
      <TitleAndDescription
        title="Accessibility"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
        marginBottom={1}
      />,
    );
    expect(wrapper.props().title).to.equal('Accessibility');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('calls componentDidMount', () => {
    sinon.spy(TitleAndDescription.prototype, 'componentDidMount');
    const wrapper = mount(
      <TitleAndDescription
        title="Accessibility"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
        marginBottom={1}
      />,
    );
    expect(TitleAndDescription.prototype.componentDidMount.calledOnce).to.be.true;
    TitleAndDescription.prototype.componentDidMount.restore();
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('TitleAndDescription - Static Rendered Markup', () => {
  it('renders the TitleAndDescription', () => {
    const wrapper = render(
      <TitleAndDescription
        title="Accessibility"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lectus dapibus, interdum massa in, vehicula augue. Ut non congue elit. Donec eget imperdiet nulla, vel tincidunt metus. Nunc tempus lectus id volutpat ornare. Quisque auctor massa ante, vitae viverra ipsum rhoncus nec. Morbi non lectus varius, iaculis augue vel, laoreet arcu. Vivamus rutrum congue tempus. Duis turpis massa, viverra id mattis eget, auctor id augue. Sed luctus at nisl nec posuere. Praesent eu varius sem. Morbi elementum mauris id ligula pulvinar, sed iaculis ipsum luctus."
        marginBottom={1}
      />,
    );
    expect(wrapper.find('.page-intro__title').length).to.equal(1);
  });
});
