import * as React from 'react';

import './style.scss';

interface ISwitchFieldProps {
    label: string,
    children: any
};

const SwitchField = ({label, children}: ISwitchFieldProps) => (
    <div className='switchfield'>
        <span className='switchfield__label'>{label}</span>
        {children}     
    </div>
);

export default SwitchField;