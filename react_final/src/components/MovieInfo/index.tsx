import * as React from 'react';

const MovieInfo = ({movie}: any) => (
    <div>
        <h2>{movie.title}</h2>
        <span>{movie.release_date.getFullYear()}</span>
        <span>{Array.isArray(movie.genres) ? movie.genres.join('&') : movie.genres}</span>
    </div>
);

export default MovieInfo;