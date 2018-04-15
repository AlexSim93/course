import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button.jsx';

import './MovieForm.scss';

const MovieForm = ({formData, onSubmitForm, onCancelForm, title}) => {
    let titleInput = React.createRef(); 
    let taglineInput = React.createRef();
    let posterPathInput = React.createRef();
    let overviewInput = React.createRef();
    return (
        <div className={classNames('app__form-container')}>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                onSubmitForm({
                    id: formData.id,
                    title: titleInput.current.value,
                    tagline: taglineInput.current.value,
                    poster_path: posterPathInput.current.value,
                    overview: overviewInput.current.value
                });
            }}
            className={classNames('movie-form')}
            >
                <h2 className={classNames('movie-form__title')}>{title}</h2>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='title-input'>Title: </label>
                    <input className={classNames('movie-form__input')} type='text' ref={titleInput} name='title' id='title-input' defaultValue={formData.title}  required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='tagline-input'>Tagline: </label>
                    <input className={classNames('movie-form__input')} type='text' ref={taglineInput} name='tagline' id='tagline-input' defaultValue={formData.tagline} required />
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='poster_path-input'>Poster path: </label>
                    <input className={classNames('movie-form__input')} type='url' ref={posterPathInput} name='poster_path' id='poster_path-input' defaultValue={formData.poster_path} required/>
                </div>
                <div className={classNames('movie-form__input-container')}>
                    <label className={classNames('movie-form__label')} htmlFor='overview-input'>Overview: </label>
                    <input className={classNames('movie-form__input')} type='text' ref={overviewInput} name='overview' id='overview-input' defaultValue={formData.overview} required/>
                </div>
                <div className={classNames('movie-form__button-container')}>
                    <Button modifiers={['button_theme_success']} mix='movie-form__button' type='submit'>Submit</Button>
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