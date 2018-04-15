import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Movie from '../Movie/Movie.jsx';

import './Movies.scss';

const Movies = ({movies, onEdit, onDelete}) => (
    <section className={classNames('movies')}>
        <h2 className={classNames('movies__title')}>List of movies</h2>
        <ul className={classNames('movies__list')}>
            {movies.map(movie => <li  key={movie.id} className={classNames('movies__list-item')}><Movie movie={movie} onDelete={onDelete} onEdit={onEdit}/></li>)}
        </ul>
    </section>
);

Movies.propTypes = {
    movies: propTypes.arrayOf(propTypes.object),
    onEdit: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
};

export default Movies;