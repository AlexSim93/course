import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Components/Button/Button.jsx';

import './MovieForm.scss';

class MovieForm extends Component {
    static propTypes = {
        formTitle: PropTypes.string.isRequired,
        onSubmitForm: PropTypes.func.isRequired,
        movies: PropTypes.array.isRequired
    }
    constructor(props){
        super(props);
        let {title='', tagline='', poster_path='', overview=''} = this.props.movies.find(el => el.id.toString() === this.props.match.params.id)||{};
        this.state = {
            title,
            tagline,
            poster_path,
            overview
        }
    }

    onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    }

    render(){
        return (
            <div className={classNames('app__form-container')}>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                this.props.onSubmitForm({
                    title: this.state.title,
                    tagline: this.state.tagline,
                    poster_path: this.state.poster_path,
                    overview: this.state.overview
                }, this.props.match.params.id);
                this.props.history.push('/list')
            }}
                className={classNames('movie-form')}
            >
                <h2 className={classNames('movie-form__title')}>{this.props.formTitle}</h2>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='title-input'>Title: </label>
                    <input className={classNames('movie-form__input')} 
                        type='text' 
                        name='title' 
                        id='title-input'
                        onChange={this.onChange} 
                        value={this.state.title} 
                        required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='tagline-input'>Tagline: </label>
                    <input className={classNames('movie-form__input')} 
                        type='text' 
                        name='tagline' 
                        id='tagline-input'
                        onChange={this.onChange}  
                        value={this.state.tagline} 
                        required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='poster_path-input'>Poster path: </label>
                    <input className={classNames('movie-form__input')} 
                        type='url' 
                        name='poster_path' 
                        id='poster_path-input'
                        onChange={this.onChange} 
                        value={this.state.poster_path} 
                        required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='overview-input'>Overview: </label>
                    <textarea className={classNames('movie-form__textarea')} 
                        type='text' 
                        name='overview' 
                        id='overview-input'
                        onChange={this.onChange} 
                        value={this.state.overview} 
                        required />
                </div>
                <div className={classNames('movie-form__button-container')}>
                    <Button modifiers='button_theme_success' 
                        mix='movie-form__button' 
                        type='submit'>Submit</Button>
                    <Link to='/list'><Button mix='movie-form__button'>Cancel</Button></Link>
                </div>
            </form>
        </div>
        );
    }
}


export default MovieForm;