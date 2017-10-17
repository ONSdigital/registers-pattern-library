import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class NavBar extends React.Component {
  componentDidMount() {
    // some logic here - we only test if the method is called
  }
  getPrimary(id) {
    const navbarPrimary = (this.props.primary === id) ?
    ('primary-nav__item js-nav hide--mobile old-ie--display-block primary-nav__item--active') :
    ('primary-nav__item js-nav hide--mobile old-ie--display-block');
    return navbarPrimary;
  }
  render() {
    return (
      <div className="primary-nav print--hide">
        <nav>
          <div className="wrapper">
            <ul className="primary-nav__list">
              {
                this.props.navBarItems.map((item) => {
                  if (item.items) {
                    return (
                      <li className="primary-nav__item js-nav js-expandable ">
                        <a className="primary-nav__link col col--md-8 col--lg-10" href={item.link} aria-haspopup="true">{item.text}</a>
                        <ul className="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance" aria-expanded="false" aria-label="submenu">
                          {
                            item.items.map((subItem) => {
                              return (
                                <li className="primary-nav__child-item  js-expandable__child">
                                  <Link className="primary-nav__child-link" to={subItem.link}>
                                    {subItem.text}
                                  </Link>
                                </li>
                              );
                            })
                          }
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li className={this.getPrimary(item.link)}>
                      <Link className="primary-nav__link col col--md-7 col--lg-9" to={item.link}>
                        {item.text}
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  primary: PropTypes.string.isRequired,
  navBarItems: PropTypes.array.isRequired,
};

export default NavBar;
