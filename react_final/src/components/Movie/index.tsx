import * as React from 'react';
import Poster from '../Poster/index';
import MovieInfoContainer from '../../containers/MovieInfoContainer/index';

const Movie = ({movie}: any) => (
    <div>
        <Poster movie={movie}/>
        <MovieInfoContainer movie={movie}/>
    </div>
);

export default Movie;