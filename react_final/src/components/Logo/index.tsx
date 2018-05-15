import * as React from 'react';
import './style.scss';

interface ILogoProps {
    text: string
};

const Logo = ({text}: ILogoProps) => (
    <div className='logo'>
        <span className='logo__text'>{text}</span>
    </div>
);

export default Logo;