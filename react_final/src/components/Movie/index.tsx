import * as React from 'react';
import Poster from '../Poster';
import MovieInfo from '../MovieInfo';

import './style.scss';

const Movie = ({movie}: any) => (
    <div className='movie'>
        <Poster movie={movie}/>
        <MovieInfo movie={movie}/>
    </div>
);

export default Movie;