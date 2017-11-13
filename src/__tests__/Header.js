import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Header from '../components/Header';
import Button from '../components/Button';

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Header - Shallow Rendering', () => {
  it('to have 1 header class', () => {
    const wrapper = shallow(
      <Header
        showHeaderItems
        headerLinks={[
          { text: 'User Details', link: '/UserDetails' },
          { text: 'Information', link: '/TechnicalInformation' },
        ]}
        imageUrl="/Home"
      >
        <Button
          id="logoutButton"
          size="thin"
          text="Logout"
          onClick={() => alert('Clicked logout button...')}
          ariaLabel="Logout Button"
          type="submit"
        />
      </Header>,
    );
    expect(wrapper.find('.header')).to.have.length(1);
  });

  it('to have the correct number of nav items', () => {
    const wrapper = shallow(
      <Header
        showHeaderItems
        headerLinks={[
          { text: 'User Details', link: '/UserDetails' },
          { text: 'Information', link: '/TechnicalInformation' },
        ]}
        imageUrl="/Home"
      >
        <Button
          id="logoutButton"
          size="thin"
          text="Logout"
          onClick={() => alert('Clicked logout button...')}
          ariaLabel="Logout Button"
          type="submit"
        />
      </Header>,
    );
    expect(wrapper.find('.secondary-nav__item')).to.have.length(2);
  });

  it('to have no child navs if none are passed in (i.e. not logged in)', () => {
    const wrapper = shallow(
      <Header
        showHeaderItems
        imageUrl="/Home"
      />,
    );
    expect(wrapper.find('.secondary-nav__item')).to.have.length(0);
  });

  it('to have the child logout button', () => {
    const wrapper = shallow(
      <Header
        showHeaderItems
        headerLinks={[
          { text: 'User Details', link: '/UserDetails' },
          { text: 'Information', link: '/TechnicalInformation' },
        ]}
        imageUrl="/Home"
      >
        <Button
          id="logoutButton"
          size="thin"
          text="Logout"
          onClick={() => alert('Clicked logout button...')}
          ariaLabel="Logout Button"
          type="submit"
        />
      </Header>,
    );
    expect(wrapper.find('#logoutButton')).to.have.length(1);
  });
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Header - Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(
      <Header
        showHeaderItems
        imageUrl="/Home"
      />,
    );
    expect(wrapper.props().showHeaderItems).to.equal(true);
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Header - Static Rendered Markup', () => {
  it('renders the Header', () => {
    const wrapper = render(
      <Header
        showHeaderItems
        imageUrl="/Home"
      />,
    );
    expect(wrapper.find('.header').length).to.equal(1);
  });
});
