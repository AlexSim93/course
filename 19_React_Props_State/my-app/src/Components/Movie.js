import React from 'react';
import MovieInfo from './MovieInfo';
import MovieControl from './MovieControl';

const Movie = ({movie}) => (
    <div>
        <MovieInfo movie={movie} />
        <MovieControl />
    </div>);

export default Movie;