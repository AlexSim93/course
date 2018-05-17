import * as React from 'react';
import * as classNames from 'classnames';
import TextField from '../TextField';
import SwitchField from '../SwitchField';
import Button from '../Button';

import './style.scss';

interface IFormProps {
    history: any;
    match: any;
};

interface IFormState {
    searchType: string;
    searchValue: string;
}

class Form extends React.Component<IFormProps, IFormState> {
    public state = {
        searchType: this.props.match.params.searchType,
        searchValue: this.props.match.params.searchValue
    }

    public onChange = (evt: any) => {
        this.setState({searchValue: evt.target.value});
    }

    public searchTypeHandler = (type: string) => {
        this.setState({searchType: type});
    };

    public render() {
        return (
            <form className={classNames('form')} onSubmit={(evt: React.SyntheticEvent<HTMLElement>): void => {
                evt.preventDefault();
                this.props.history.push(`/search/${this.state.searchType}/${this.state.searchValue}`);
            }}>
                <TextField value={this.state.searchValue} onChange={this.onChange} id='search'/>
                <SwitchField darkTheme uppercased label='search by'>
                    <Button inactive={this.state.searchType !== 'title'} sizeSm type='button' text='title' onClick={(): void => this.searchTypeHandler('title')} />
                    <Button inactive={this.state.searchType !== 'tagline'} sizeSm type='button' text='tagline' onClick={(): void => this.searchTypeHandler('tagline')} />
                </SwitchField>
                <Button sizeLg type='submit' text='search' />
            </form>
        );
    }
}

export default Form;