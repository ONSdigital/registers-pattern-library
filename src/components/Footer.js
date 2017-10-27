import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Footer = ({ footerSection }) => {
  const footerItemStyle = {
    textDecoration: 'underline',
    color: 'white',
  };
  const footerMailToStyle = {
    textDecoration: 'underline',
    color: 'white',
    cursor: 'pointer',
  };
  return (
    <footer id="footer" className="print--hide" style={{ position: 'absolute', left: 0, right: 0, overflow: 'hidden' }}>
      <h2 className="visuallyhidden">Footer links</h2>
      <div className="footer">
        <div className="wrapper">
          <nav>
            <div className="footer-nav col-wrap">
              {
                footerSection.map((section) => {
                  return (
                    <div key={section.title} className="col col--lg-one-third col--md-one-third">
                      <h3 className="footer-nav__heading">{section.title}</h3>
                      <ul className="footer-nav__list">
                        {
                          section.items.map((item) => {
                            if (item.emailHref) {
                              return (
                                <li key={item.text} className="footer-nav__item" style={footerMailToStyle} onClick={() => (window.location.href = item.emailHref)}>
                                  {item.text}
                                </li>
                              );
                            }
                            return (
                              <Link key={item.text} to={item.link}>
                                <li className="footer-nav__item" style={footerItemStyle}>
                                  {item.text}
                                </li>
                              </Link>
                            );
                          })
                        }
                      </ul>
                    </div>);
                })
              }
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footerSection: PropTypes.array.isRequired,
};

export default Footer;
