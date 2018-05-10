import * as React from 'react';
import Button from '../Button/index';

interface ISwitchFieldProps {
    label: string,
    buttons?: string[]
};

let key = 0;

const SwitchField = ({label, buttons=[]}: ISwitchFieldProps) => (
    <div>
        <span>{label}</span>
        {buttons.map((element)=><Button key={key++} type='button' text={element}/>)}      
    </div>
);

export default SwitchField;