import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

const MoviePoster = ({movie}) =>  (
    <div className={classNames('movie__poster-container')}>
        <img className={classNames('movie__poster')} src={movie.poster_path} alt={movie.title}/>
    </div>
);

MoviePoster.propTypes = {
    movie: propTypes.object.isRequired
};

export default MoviePoster;