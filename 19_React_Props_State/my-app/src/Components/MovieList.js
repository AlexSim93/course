import React from 'react';
import Movie from './Movie';

const MovieList = ({movies, onDelete}) => (<ul>{movies.map(movie => <Movie key={movie.id} movie={movie} onDelete={onDelete}/>)}</ul>);

export default MovieList;