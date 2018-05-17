import * as React from 'react';
import * as classNames from 'classnames';
import * as uniqid from 'uniqid';

import './style.scss';

interface ISwitchFieldProps {
    label: string;
    children: any;
    darkTheme?: boolean;
    uppercased?: boolean;
};

const SwitchField = ({label, children, darkTheme, uppercased}: ISwitchFieldProps) => (
    <div className={classNames('switchfield')}>
        <span className={classNames('switchfield__label', {'switchfield__label_theme_dark': darkTheme, 'switchfield__label_uppercased': uppercased})}>{label}</span>
        {children.map((child: JSX.Element) => <div key={uniqid()} className={classNames('switchfield__button-container')}>{child}</div>)}     
    </div>
);

export default SwitchField;