import React from 'react';
import MovieInfo from './MovieInfo';
import MovieControl from './MovieControl';

const Movie = ({movie, onEdit, onDelete}) => (
    <div>
        <MovieInfo movie={movie} />
        <MovieControl onEdit={()=>onEdit(movie)} onDelete={()=>onDelete(movie)}/>
    </div>);

export default Movie;