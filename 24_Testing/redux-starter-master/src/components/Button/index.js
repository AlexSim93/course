import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

const Button = ({text, onClick = Function.prototype}) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
