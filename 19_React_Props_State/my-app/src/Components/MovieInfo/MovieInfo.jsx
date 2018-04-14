import React from 'react';
import propTypes from 'prop-types';

const MovieInfo = ({movie}) => (
    <section>
        <div><h3>{movie.title}</h3></div>
        <div><h4>{movie.tagline}</h4></div>
        <div><p>{movie.overview}</p></div>
    </section>
);

MovieInfo.propTypes = {
    movie: propTypes.object.isRequired
};

export default MovieInfo;