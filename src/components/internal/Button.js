import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'halogenium';

/**
 * @const Button - An ONS style Button with a loading spinner. The button
 * will only call the passed in onClick function if it is not in a
 * loading state.
 */
const Button = ({ size, id, ariaLabel, loading, onClick, text, type }) => {
  const spinner = (<PulseLoader id="spinner" color="#FFFFFF" size="8px" margin="0px" />);
  return (
    <button
      className={`btn btn--primary venus btn--${size}`}
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
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Button;
