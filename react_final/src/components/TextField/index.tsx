import * as React from 'react';

interface ITextFieldProps {
    id: string,
    variable: any
};

const TextField = ({id, variable}: ITextFieldProps) => (
    <div>
        <label htmlFor={id}>Find your movie</label>
        <input type='search' name='search' id={id} ref={input => variable(input)}/>
    </div>
);

export default TextField;