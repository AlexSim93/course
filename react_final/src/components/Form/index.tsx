import * as React from 'react';
import TextField from '../TextField/index';
import SwitchField from '../SwitchField/index';
import Button from '../Button/index';

interface IFormProps {
    history: any
};

const Form = ({history}: IFormProps) => {
    let searchInput: HTMLInputElement;
    let searchType:string = 'title';
    const refHandler = (input: any) : void => {
        searchInput = input;
    };
    const searchTypeHandler = (type: string) : void => {searchType = type};
    return (
        <form onSubmit={(evt: React.SyntheticEvent<HTMLElement>) : void=>{
            evt.preventDefault();
            history.push(`/search/${searchType}/${searchInput.value}`);
            searchInput.value = '';
        }}>
            <TextField id='search' variable={refHandler}/>
            <SwitchField label='search by'>
                <Button type='button' text='title' onClick={() : void => searchTypeHandler('title')}/>
                <Button type='button' text='tagline' onClick={() : void => searchTypeHandler('tagline')}/>
            </SwitchField>
            <Button type='submit' text='search'/>
        </form>
    );
};

export default Form;