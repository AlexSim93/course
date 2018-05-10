import * as React from 'react';

interface ILogoProps {
    text: string
};

const Logo = ({text}: ILogoProps) => (
    <div>
        {text}
    </div>
);

export default Logo;