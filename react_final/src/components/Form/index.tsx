import * as React from 'react';
import TextField from '../TextField/index';
import SwitchField from '../SwitchField/index';
import Button from '../Button/index';

const Form = () => {
    let searchInput: any;
    const refHandler = (input: any) => {
        searchInput = input;
    };
    const handle = (evt: any) => {
        evt.preventDefault();
        console.log(searchInput.value);
        searchInput.value = '';
    };
    return (
        <form onSubmit={handle}>
            <TextField id='search' variable={refHandler}/>
            <SwitchField label='search by' buttons={['title', 'director']}/>
            <Button type='submit' text='search'/>
        </form>
    );
};

export default Form;