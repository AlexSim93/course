import * as React from 'react';
import './style.scss';

const ChosenMovieInfo = ({movie}: any) => (
    <div className='chosen-movie'>
        <h2 className='chosen-movie__title'>{movie.title}</h2>
        <span className='chosen-movie__rating'>{movie.rating}</span>
        <span className='chosen-movie__tagline'>{movie.tagline}</span>
        <span className='chosen-movie__year'>{new Date(movie.release_date).getFullYear()}</span>
        <span className='chosen-movie__runtime'>{movie.runtime}</span>
        <span className='chosen-movie__overview'>{movie.overview}</span>
    </div>
);

export default ChosenMovieInfo;