import * as React from 'react';
import './style.scss';

interface ILogoProps {
    text: string
};

const Logo = ({text}: ILogoProps) => (
    <div className='logo'>
        {text}
    </div>
);

export default Logo;