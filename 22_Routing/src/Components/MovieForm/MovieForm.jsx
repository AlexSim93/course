import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button.jsx';

import './MovieForm.scss';

const MovieForm = ({ movies, onSubmitForm, formTitle, history, match }) => {
    let titleInput, taglineInput, posterPathInput, overviewInput;
    let currentMovie = movies.find(el => el.id.toString() === match.params.id);
    let {title, tagline, poster_path, overview} = Object.assign({}, currentMovie);
    return (
        <div className={classNames('app__form-container')}>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                onSubmitForm({
                    title: titleInput.value,
                    tagline: taglineInput.value,
                    poster_path: posterPathInput.value,
                    overview: overviewInput.value
                }, match.params.id);
                history.push('/list')
            }}
                className={classNames('movie-form')}
            >
                <h2 className={classNames('movie-form__title')}>{formTitle}</h2>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='title-input'>Title: </label>
                    <input className={classNames('movie-form__input')} 
                        type='text' 
                        ref={input => titleInput = input} 
                        name='title' id='title-input' 
                        defaultValue={title} 
                        required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='tagline-input'>Tagline: </label>
                    <input className={classNames('movie-form__input')} 
                        type='text' 
                        ref={input => taglineInput = input} 
                        name='tagline' 
                        id='tagline-input' 
                        defaultValue={tagline} 
                        required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='poster_path-input'>Poster path: </label>
                    <input className={classNames('movie-form__input')} 
                        type='url' 
                        ref={input => posterPathInput = input} 
                        name='poster_path' 
                        id='poster_path-input' 
                        defaultValue={poster_path} 
                        required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='overview-input'>Overview: </label>
                    <textarea className={classNames('movie-form__textarea')} 
                        type='text' 
                        ref={input => overviewInput = input} 
                        name='overview' 
                        id='overview-input' 
                        defaultValue={overview} 
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
    
};

MovieForm.propTypes = {
    onSubmitForm: propTypes.func.isRequired,
    formTitle: propTypes.string.isRequired
};

export default MovieForm;