import * as React from 'react';
import Poster from '../Poster/index';
import MovieInfo from '..//MovieInfo/index';

const Movie = ({movie}: any) => (
    <div>
        <Poster movie={movie}/>
        <MovieInfo movie={movie}/>
    </div>
);

export default Movie;