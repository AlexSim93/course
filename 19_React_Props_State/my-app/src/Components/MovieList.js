import React from 'react';
import Movie from './Movie';

const MovieList = ({movies, onEdit, onDelete}) => (
    <ul>
        {movies.map(movie => <Movie key={movie.id} movie={movie} onDelete={onDelete} onEdit={onEdit}/>)}
    </ul>
);

export default MovieList;