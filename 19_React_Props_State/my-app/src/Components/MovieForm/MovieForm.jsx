import React from 'react';
import propTypes from 'prop-types';

const MovieForm = ({formData, onSubmitForm, onCancelForm, title}) => {
    let titleInput = React.createRef(); 
    let taglineInput = React.createRef();
    let posterPathInput = React.createRef();
    let overviewInput = React.createRef();
    return (
        <div>
            <h2>{title}</h2>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                onSubmitForm({
                    id: formData.id,
                    title: titleInput.current.value,
                    tagline: taglineInput.current.value,
                    poster_path: posterPathInput.current.value,
                    overview: overviewInput.current.value
                });
            }}>
                <div>
                    <label htmlFor='title-input'>Title: </label>
                    <input type='text' ref={titleInput} name='title' id='title-input' defaultValue={formData.title}  required />
                </div>
                <div>
                    <label htmlFor='tagline-input'>Tagline: </label>
                    <input type='text' ref={taglineInput} name='tagline' id='tagline-input' defaultValue={formData.tagline} required />
                </div>
                <div>
                    <label htmlFor='poster_path-input'>Poster path: </label>
                    <input type='url' ref={posterPathInput} name='poster_path' id='poster_path-input' defaultValue={formData.poster_path} required/>
                </div>
                <div>
                    <label htmlFor='overview-input'>Overview: </label>
                    <input type='text' ref={overviewInput} name='overview' id='overview-input' defaultValue={formData.overview} required/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                    <button type='button' onClick={onCancelForm}>Cancel</button>
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