import React from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => (<ul>{movies.map(movie => <Movie key={movie.id} movie={movie}/>)}</ul>);

export default MovieList;