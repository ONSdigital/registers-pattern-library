import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import NavBar from '../components/NavBar';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('NavBar - Shallow Rendering', () => {
  it('to have 1 NavBar class', () => {
    const wrapper = shallow(
      <NavBar
        primary="/Home"
        navBarItems={[
          { text: 'Home', link: '/Home' },
          { text: 'Search', link: '/RefSearch' },
        ]}
      />,
    );
    expect(wrapper.find('.primary-nav')).to.have.length(1);
  });

  it('to have the correct number of nav items', () => {
    const wrapper = shallow(
      <NavBar
        primary="/Home"
        navBarItems={[
          { text: 'Home', link: '/Home' },
          { text: 'Search', link: '/RefSearch' },
        ]}
      />,
    );
    expect(wrapper.find('.primary-nav__link')).to.have.length(2);
  });

  it('to have the correct number of nested nav items', () => {
    const wrapper = shallow(
      <NavBar
        primary="/Home"
        navBarItems={[
          { text: 'Home', link: '/Home' },
          { text: 'Search', link: '/Search' },
          { text: 'Unit Search', link: '/RefSearch', items: [{ text: 'Enterprise', link: '/Enterprise' }, { text: 'Legal Unit', link: '/LegalUnit' }, { text: 'VAT', link: '/VAT' }] },
        ]}
      />,
    );
    expect(wrapper.find('.primary-nav__child-item')).to.have.length(3);
  });

  it('to have one active nav item', () => {
    const wrapper = shallow(
      <NavBar
        primary="/Home"
        navBarItems={[
          { text: 'Home', link: '/Home' },
          { text: 'Search', link: '/Search' },
          { text: 'Unit Search', link: '/RefSearch', items: [{ text: 'Enterprise', link: '/Enterprise' }, { text: 'Legal Unit', link: '/LegalUnit' }, { text: 'VAT', link: '/VAT' }] },
        ]}
      />,
    );
    expect(wrapper.find('.primary-nav__item--active')).to.have.length(1);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('NavBar - Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(
      <NavBar
        primary="/Home"
        navBarItems={[
          { text: 'Home', link: '/Home' },
          { text: 'Search', link: '/Search' },
          { text: 'Unit Search', link: '/RefSearch', items: [{ text: 'Enterprise', link: '/Enterprise' }, { text: 'Legal Unit', link: '/LegalUnit' }, { text: 'VAT', link: '/VAT' }] },
        ]}
      />,
    );
    expect(wrapper.props().primary).to.equal('/Home');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });

  it('calls componentDidMount', () => {
    sinon.spy(NavBar.prototype, 'componentDidMount');
    mount(
      <NavBar
        primary="/Home"
        navBarItems={[
          { text: 'Home', link: '/Home' },
          { text: 'Search', link: '/Search' },
          { text: 'Unit Search', link: '/RefSearch', items: [{ text: 'Enterprise', link: '/Enterprise' }, { text: 'Legal Unit', link: '/LegalUnit' }, { text: 'VAT', link: '/VAT' }] },
        ]}
      />,
    );
    expect(NavBar.prototype.componentDidMount.calledOnce).to.be.true;
    NavBar.prototype.componentDidMount.restore();
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('NavBar - Static Rendered Markup', () => {
  it('renders the Header', () => {
    const wrapper = render(
      <NavBar
        primary="/Home"
        navBarItems={[
          { text: 'Home', link: '/Home' },
          { text: 'Search', link: '/Search' },
          { text: 'Unit Search', link: '/RefSearch', items: [{ text: 'Enterprise', link: '/Enterprise' }, { text: 'Legal Unit', link: '/LegalUnit' }, { text: 'VAT', link: '/VAT' }] },
        ]}
      />,
    );
    expect(wrapper.find('.primary-nav').length).to.equal(1);
  });
});
