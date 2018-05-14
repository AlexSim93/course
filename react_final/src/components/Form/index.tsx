import * as React from 'react';
import TextField from '../TextField/index';
import SwitchField from '../SwitchField/index';
import Button from '../Button/index';

interface IFormProps {
    fetchData: any,
    history: any
};

const Form = ({fetchData, history}: IFormProps) => {
    let searchInput: any;
    let searchType:string = 'title';
    const refHandler = (input: any) => {
        searchInput = input;
    };
    const searchTypeHandler = (type: string) => searchType = type;
    return (
        <form onSubmit={(evt: any)=>{
            evt.preventDefault();
            history.push(`/search/${searchType}/${searchInput.value}`);
            fetchData(`http://localhost:3000/movies?${searchType}_like=${searchInput.value}`);
            searchInput.value = '';
        }}>
            <TextField id='search' variable={refHandler}/>
            <SwitchField label='search by'>
                <Button type='button' text='title' onClick={() => searchTypeHandler('title')}/>
                <Button type='button' text='tagline' onClick={() => searchTypeHandler('tagline')}/>
            </SwitchField>
            <Button type='submit' text='search'/>
        </form>
    );
};

export default Form;