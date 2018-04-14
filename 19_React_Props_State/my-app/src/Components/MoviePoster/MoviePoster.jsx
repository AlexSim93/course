import React from 'react';
import propTypes from 'prop-types';

const MoviePoster = ({movie}) =>  (<img src={movie.poster_path} alt={movie.title}/>);

MoviePoster.propTypes = {
    movie: propTypes.object.isRequired
};

export default MoviePoster;