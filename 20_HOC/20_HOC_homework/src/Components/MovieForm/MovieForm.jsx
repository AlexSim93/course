import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button.jsx';

import './MovieForm.scss';

const MovieForm = ({formData, onSubmitForm, onCancelForm, title}) => {
    let titleInput, taglineInput, posterPathInput, overviewInput;
    return (
        <div className={classNames('app__form-container')}>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                onSubmitForm({
                    id: formData.id,
                    title: titleInput.value,
                    tagline: taglineInput.value,
                    poster_path: posterPathInput.value,
                    overview: overviewInput.value
                });
            }}
            className={classNames('movie-form')}
            >
                <h2 className={classNames('movie-form__title')}>{title}</h2>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='title-input'>Title: </label>
                    <input className={classNames('movie-form__input')} type='text' ref={input=> titleInput = input} name='title' id='title-input' defaultValue={formData.title}/>
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='tagline-input'>Tagline: </label>
                    <input className={classNames('movie-form__input')} type='text' ref={input => taglineInput = input} name='tagline' id='tagline-input' defaultValue={formData.tagline} />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='poster_path-input'>Poster path: </label>
                    <input className={classNames('movie-form__input')} type='url' ref={input => posterPathInput = input} name='poster_path' id='poster_path-input' defaultValue={formData.poster_path} />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='overview-input'>Overview: </label>
                    <textarea className={classNames('movie-form__textarea')} type='text' ref={input => overviewInput = input} name='overview' id='overview-input' defaultValue={formData.overview} />
                </div>
                <div className={classNames('movie-form__button-container')}>
                    <Button modifiers='button_theme_success' mix='movie-form__button' type='submit'>Submit</Button>
                    <Button onClick={onCancelForm} mix='movie-form__button'>Cancel</Button>
                </div>
            </form>
        </div>
    );
};

MovieForm.propTypes = {
    formData: propTypes.object.isRequired,
    onSubmitForm: propTypes.func.isRequired,
    onCancelForm: propTypes.func.isRequired,
    title: propTypes.string.isRequired
};

export default MovieForm;