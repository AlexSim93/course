import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import MoviePoster from '../MoviePoster/MoviePoster.jsx';
import MovieInfo from '../MovieInfo/MovieInfo.jsx';

const MovieMain = ({movie}) => (
    <div className={classNames('movie__main')}>
        <MoviePoster movie={movie} />
        <MovieInfo movie={movie} />
    </div>
);

MovieMain.propTypes = {
    movie: propTypes.object.isRequired
};

export default MovieMain;