import * as React from 'react';
import Button from '../Button/index';

interface ISwitchFieldProps {
    label: string,
    buttons?: any[]
};

let key = 0;

const SwitchField = ({label, buttons=[]}: ISwitchFieldProps) => (
    <div>
        <span>{label}</span>
        {buttons.map((element)=><Button onClick={element.onClick} key={key++} type='button' text={element.text}/>)}      
    </div>
);

export default SwitchField;