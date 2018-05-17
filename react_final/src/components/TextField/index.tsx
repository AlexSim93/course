import * as React from 'react';

interface ITextFieldProps {
    id: string;
    value: string;
    onChange?(evt: any): void;
};

const TextField = ({id, onChange, value}: ITextFieldProps) => (
    <div className='form__text-container'>
        <label className='form__text-container-label' htmlFor={id}>Find your movie</label>
        <input className='form__text-container-input' type='search' name='search' value={value} onChange={onChange} id={id}/>
    </div>
);

export default TextField;