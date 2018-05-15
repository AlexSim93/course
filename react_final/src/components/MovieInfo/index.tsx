import * as React from 'react';
import StarIconContainer from '../../containers/StarIconContainer';

const MovieInfo = ({movie}: any) => (
    <div>
        <h2>{movie.title}</h2>
        <span>{movie.release_date.getFullYear()}</span>
        <StarIconContainer id={movie.id}/>
        <span>{Array.isArray(movie.genres) ? movie.genres.join('&') : movie.genres}</span>
    </div>
);

export default MovieInfo;