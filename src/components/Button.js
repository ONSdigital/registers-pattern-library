import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'halogen/PulseLoader';

class Button extends React.Component {
  componentDidMount() {
    // some logic here - we only test if the method is called
  }
  render() {
    const spinner = (<Loader id="spinner" color="#FFFFFF" size="8px" margin="0px" />);
    return (
      <button
        className={`btn btn--primary btn--${this.props.size}`}
        id={this.props.id}
        aria-label={this.props.ariaLabel}
        onClick={this.props.loading ? null : this.props.onClick}
        type={this.props.type}
      >
        {this.props.loading ? spinner : this.props.text}
      </button>
    );
  }
}

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired, // This can be just text, or a spinner etc.
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired, // wide or thin
  loading: PropTypes.bool,
};

export default Button;
