import * as React from 'react';
import * as classNames from 'classnames';

import './style.scss';

interface IButtonProps {
    text: string;
    type?: string;
    light?: boolean;
    withoutBG?: boolean;
    sizeLg?: boolean;
    sizeSm?: boolean;
    inactive?: boolean;
    withoutBGInactive?: boolean;
    lowercased?: boolean;
    onClick?(): void;
};

const Button = ({text, type, light, lowercased, withoutBG, withoutBGInactive, sizeLg, sizeSm, inactive, onClick}: IButtonProps) => (
    <button className={classNames('button', 
        {
            'button_theme_light': light, 
            'button_without-background': withoutBG,
            'button_without-background-inactive': withoutBGInactive, 
            'button_size_lg': sizeLg, 
            'button_size_sm': sizeSm,
            'button_inactive': inactive,
            'button_lowercased': lowercased
        })} 
            type={type} 
            onClick={onClick} >
            {text}
    </button>
);

export default Button;