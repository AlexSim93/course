import * as React from 'react';

const ChosenMovieInfo = ({movie}: any) => (
    <div>
        <h2>{movie.title}</h2>
        <span>{movie.rating}</span>
        <span>{movie.tagline}</span>
        <span>{movie.release_date.getFullYear()}</span>
        <span>{movie.overview}</span>
    </div>
);

export default ChosenMovieInfo;