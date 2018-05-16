import * as React from 'react';

import './style.scss';

interface IButtonProps {
    text: string;
    type?: string;
    onClick?(): void;
};

const Button = ({text, type, onClick}: IButtonProps) => (
    <button className='button' type={type} onClick={onClick} >{text}</button>
);

export default Button;