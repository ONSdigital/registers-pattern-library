import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  componentDidMount() {
    // some logic here - we only test if the method is called
  }
  render() {
    return (
      <button
        className="btn btn--primary btn--wide"
        type="submit"
        id={this.props.id}
        aria-label={this.props.ariaLabel}
        onClick={this.props.onClick}
      >
        {this.props.buttonContent}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  buttonContent: PropTypes.any.isRequired, // This can be just text, or a spinner etc.
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default Button;
