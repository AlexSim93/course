import * as React from 'react';

interface IButtonProps {
    text: string;
    type?: string;
    onClick?(): void;
};

const Button = ({text, type, onClick}: IButtonProps) => (
    <button type={type} onClick={onClick} >{text}</button>
);

export default Button;