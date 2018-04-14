import React from 'react';
import propTypes from 'prop-types';
import Movie from '../Movie/Movie.jsx';

const MovieList = ({movies, onEdit, onDelete}) => (
    <ul>
        {movies.map(movie => <Movie key={movie.id} movie={movie} onDelete={onDelete} onEdit={onEdit}/>)}
    </ul>
);

MovieList.propTypes = {
    movies: propTypes.arrayOf(propTypes.object),
    onEdit: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
};

export default MovieList;