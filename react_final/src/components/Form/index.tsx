import * as React from 'react';
import * as classNames from 'classnames';
import TextField from '../TextField';
import SwitchField from '../SwitchField';
import Button from '../Button';

import './style.scss';

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
        <form className={classNames('form')} onSubmit={(evt: React.SyntheticEvent<HTMLElement>) : void=>{
            evt.preventDefault();
            history.push(`/search/${searchType}/${searchInput.value}`);
            searchInput.value = '';
        }}>
            <TextField id='search' variable={refHandler}/>
            <SwitchField darkTheme uppercased label='search by'>
                <Button inactive={searchType !== 'title'} sizeSm type='button' text='title' onClick={() : void => searchTypeHandler('title')}/>
                <Button inactive={searchType !== 'tagline'} sizeSm type='button' text='tagline' onClick={() : void => searchTypeHandler('tagline')}/>
            </SwitchField>
            <Button sizeLg type='submit' text='search'/>
        </form>
    );
};

export default Form;