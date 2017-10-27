import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ backgroundColour, message, text }) => {
  const style = {
    banner: {
      marginTop: '-20px',
      width: '100vw',
      backgroundColor: backgroundColour,
      color: '#fff',
      boxSizing: 'border-box',
      display: 'block',
      height: '40px',
    },
    bannerTag: {
      paddingTop: '2px',
      paddingRight: '7px',
      paddingBottom: '3px',
      paddingLeft: '7px',
      marginLeft: '10px',
      color: '#FFFFFF',
      fontWeight: '700',
      backgroundColor: '#323132',
      boxSizing: 'border-box',
    },
    p: {
      paddingTop: '10px',
    },
  };
  return (
    <div id="banner" style={style.banner}>
      <div id="innerBanner" style={style.banner}>
        <div className="container">
          <p style={style.p}>
            <strong style={style.bannerTag}>
              {text}
            </strong>&nbsp;
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  message: '',
  backgroundColour: '#3B7A9E',
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  message: PropTypes.string,
  backgroundColour: PropTypes.string,
};

export default Banner;
