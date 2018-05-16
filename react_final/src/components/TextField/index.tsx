import * as React from 'react';

interface ITextFieldProps {
    id: string,
    variable: any
};

const TextField = ({id, variable}: ITextFieldProps) => (
    <div className='form__text-container'>
        <label className='form__text-container-label' htmlFor={id}>Find your movie</label>
        <input className='form__text-container-input' type='search' name='search' id={id} ref={input => variable(input)}/>
    </div>
);

export default TextField;