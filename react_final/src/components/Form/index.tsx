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
    const searchTypeHandler = (type: string) => () => searchType = type;
    return (
        <form onSubmit={(evt: any)=>{
            evt.preventDefault();
            console.log(searchInput.value);
            console.log(searchType);
            history.push(`/search/${searchType}_like=${searchInput.value}`);
            fetchData(`http://localhost:3000/movies?${searchType}_like=${searchInput.value}`);
            searchInput.value = '';
        }}>
            <TextField id='search' variable={refHandler}/>
            <SwitchField label='search by' 
                buttons={[
                    {text: 'title', onClick: searchTypeHandler('title')}, 
                    {text: 'director', onClick: searchTypeHandler('director')}
                ]}/>
            <Button type='submit' text='search'/>
        </form>
    );
};

export default Form;