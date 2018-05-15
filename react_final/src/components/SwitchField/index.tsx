import * as React from 'react';

interface ISwitchFieldProps {
    label: string,
    children: any
};

const SwitchField = ({label, children}: ISwitchFieldProps) => (
    <div>
        <span>{label}</span>
        {children}     
    </div>
);

export default SwitchField;