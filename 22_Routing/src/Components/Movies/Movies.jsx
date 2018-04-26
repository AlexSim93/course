import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Movie from '../Movie/Movie.jsx';

import './Movies.scss';

const Movies = ({ movies, onDelete, onErrorPoster }) => (
    <section className={classNames('movies')}>
        <h2 className={classNames('movies__title')}>List of movies</h2>
        <ul className={classNames('movies__list')}>
            {movies.map(movie =>
                <li key={movie.id} className={classNames('movies__list-item')}>
                    <Movie movie={movie}
                        onDelete={onDelete}
                        onErrorPoster={onErrorPoster} />
                </li>)}
        </ul>
    </section>
);

Movies.propTypes = {
    movies: propTypes.arrayOf(propTypes.object),
    onDelete: propTypes.func.isRequired,
    onErrorPoster: propTypes.func.isRequired
};

export default Movies;