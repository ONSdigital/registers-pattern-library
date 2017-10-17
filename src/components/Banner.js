import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {
  componentDidMount() {
    // some logic here - we only test if the method is called
  }
  render() {
    const style = {
      banner: {
        marginTop: '-20px',
        width: '100vw',
        backgroundColor: '#3B7A9E',
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
      <div style={style.banner}>
        <div style={style.banner}>
          <div className="container">
            <p style={style.p}>
              <strong style={style.bannerTag}>
                {this.props.text}
              </strong>&nbsp;
              {this.props.message}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Banner.defaultProps = {
  message: '',
};

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default Banner;
