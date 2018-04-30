import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import MoviePoster from '../MoviePoster/index';
import MovieInfo from '../MovieInfo/index';

const MovieMain = ({ movie, onErrorPoster }) => (
    <div className={classNames('movie__main')}>
        <MoviePoster movie={movie} onErrorPoster={onErrorPoster} />
        <MovieInfo movie={movie} />
    </div>
);

MovieMain.propTypes = {
    movie: propTypes.object.isRequired,
    onErrorPoster: propTypes.func.isRequired
};

export default MovieMain;