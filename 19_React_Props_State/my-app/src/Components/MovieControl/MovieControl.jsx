import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button.jsx';

const MovieControl = ({onEdit, onDelete}) => (
    <div className={classNames('movie__control')}>
        <Button onClick={onEdit} mix='movie__button'>Edit</Button>
        <Button onClick={onDelete} modifiers='button_theme_danger' mix='movie__button'>Delete</Button>
    </div>
);

MovieControl.propTypes = {
    onEdit: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
}

export default MovieControl;