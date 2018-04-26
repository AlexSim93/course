import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';

const MovieControl = ({onDelete, id}) => (
    <div className={classNames('movie__control')}>
        <Link to={`/edit/${id}`} ><Button mix='movie__button'>Edit</Button></ Link>
        <Button onClick={onDelete} modifiers='button_theme_danger' mix='movie__button'>Delete</Button>
    </div>
);

MovieControl.propTypes = {
    onDelete: propTypes.func.isRequired
}

export default MovieControl;