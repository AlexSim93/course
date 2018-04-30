import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

const MoviePoster = ({movie, onErrorPoster}) =>  (
    <div className={classNames('movie__poster-container')}>
        <img className={classNames('movie__poster')} 
            src={movie.poster_path} 
            alt={movie.title} 
            onError={onErrorPoster}/>
    </div>
);

MoviePoster.propTypes = {
    movie: propTypes.object.isRequired,
    onErrorPoster: propTypes.func.isRequired
};

export default MoviePoster;