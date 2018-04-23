import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';

const Header = ({ showHeaderItems, headerLinks, imageUrl, children }) => {
  return (
    <div className="wrapper">
      <div className="header col-wrap">
        <div className="col col--lg-one-third col--md-one-third">
          <a onClick={() => browserHistory.push(imageUrl)} style={{ cursor: 'pointer' }}>
            <img className="logo" src="https://cdn.ons.gov.uk/assets/images/ons-logo/v2/ons-logo.svg" alt="Office for National Statistics" />
          </a>
        </div>
        <div className="col col--lg-two-thirds col--md-two-thirds print--hide">&nbsp;</div>
        {showHeaderItems &&
          <div className="secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide">
            <ul className="secondary-nav__list js-nav-clone__list">
              {
                headerLinks.map((item) => {
                  return (
                    <li key={item.text} className="secondary-nav__item">
                      <Link className="secondary-nav__link  js-nav-clone__link" to={item.link}>{item.text}</Link>
                    </li>
                  );
                })
              }
              {children}
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

Header.defaultProps = {
  showHeaderItems: true,
  headerLinks: [],
  children: null,
};

Header.propTypes = {
  showHeaderItems: PropTypes.bool,
  headerLinks: PropTypes.array,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default Header;
