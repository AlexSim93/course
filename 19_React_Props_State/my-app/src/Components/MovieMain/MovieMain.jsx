import React from 'react';
import propTypes from 'prop-types';
import MoviePoster from '../MoviePoster/MoviePoster.jsx';
import MovieInfo from '../MovieInfo/MovieInfo.jsx';


import './MovieMain.scss';

const MovieMain = ({movie}) => (
    <div>
        <MoviePoster movie={movie} />
        <MovieInfo movie={movie} />
    </div>
);

MovieMain.propTypes = {
    movie: propTypes.object.isRequired
};

export default MovieMain;