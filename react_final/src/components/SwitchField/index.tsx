import * as React from 'react';
import * as classNames from 'classnames';

import './style.scss';

interface ISwitchFieldProps {
    label: string;
    children: any;
    darkTheme?: boolean;
};

let id = 0;

const SwitchField = ({label, children, darkTheme}: ISwitchFieldProps) => (
    <div className={classNames('switchfield')}>
        <span className={classNames('switchfield__label', {'switchfield__label_theme_dark': darkTheme})}>{label}</span>
        {children.map((child: JSX.Element) => <div key={id++} className={classNames('switchfield__button-container')}>{child}</div>)}     
    </div>
);

export default SwitchField;