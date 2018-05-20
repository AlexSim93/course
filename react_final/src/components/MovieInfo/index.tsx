import * as React from 'react';
import StarIconWithouter from '../../containers/StarIconWithRouter';

import './style.scss';

const MovieInfo = ({movie}: any) => (
    <div className='movie-info'>
        <h2 className='movie-info__title'>{movie.title}</h2>
        <span className='movie-info__year'>{movie.release_date.getFullYear()}</span>
        <span className='movie-info__genres'>{Array.isArray(movie.genres) ? movie.genres.join(' & ') : movie.genres}</span>
        <StarIconWithouter id={movie.id}/>
    </div>
);

export default MovieInfo;