import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = ({type, onClick, children, modifiers, mix}) => (<button className={classNames('button', modifiers, mix)} type={type} onClick={onClick}>{children}</button>);

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    type: propTypes.oneOf(['submit', 'button', 'reset']),
    onClick: propTypes.func,
    modifiers: propTypes.arrayOf(propTypes.string),
    mix: propTypes.string
};

export default Button;
