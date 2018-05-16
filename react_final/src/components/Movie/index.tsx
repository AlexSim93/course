import * as React from 'react';
import Poster from '../Poster/index';
import MovieInfo from '..//MovieInfo/index';

import './style.scss';

const Movie = ({movie}: any) => (
    <div className='movie'>
        <Poster movie={movie}/>
        <MovieInfo movie={movie}/>
    </div>
);

export default Movie;