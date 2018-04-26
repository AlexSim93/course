import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const propTypes = {
  text: PropTypes.number
};

const Display = ({text}) => {
  return (
    <p className="display">
      {text}
    </p>
  )
};

Display.propTypes = propTypes;

export default Display;