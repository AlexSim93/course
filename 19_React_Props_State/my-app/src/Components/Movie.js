import React from 'react';
import MovieInfo from './MovieInfo';
import MovieControl from './MovieControl';

const Movie = ({movie, onDelete}) => (
    <div>
        <MovieInfo movie={movie} />
        <MovieControl onDelete={()=>onDelete(movie)}/>
    </div>);

export default Movie;