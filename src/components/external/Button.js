import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'halogen/PulseLoader';

const Button = ({ size, id, ariaLabel, loading, onClick, text, type }) => {
  const spinner = (<Loader id="spinner" color="#FFFFFF" size="8px" margin="0px" />);
  return (
    <button
      className={`btn btn--primary btn--${size}`}
      id={id}
      aria-label={ariaLabel}
      onClick={loading ? null : onClick}
      type={type}
    >
      {loading ? spinner : text}
    </button>
  );
};

Button.defaultProps = {
  loading: false,
  onClick: null,
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired, // This can be just text, or a spinner etc.
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired, // wide or thin
  loading: PropTypes.bool,
};

export default Button;
