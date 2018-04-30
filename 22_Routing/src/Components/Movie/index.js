import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import MovieMain from '../MovieMain/index';
import MovieControl from '../MovieControl/index';

import './style.scss';

const Movie = ({movie, onDelete, onErrorPoster}) => (
    <div className={classNames('movie', 'movies__movie')}>
        <MovieMain movie={movie} onErrorPoster={onErrorPoster}/>
        <MovieControl onDelete={()=>onDelete(movie)}  id={movie.id}/>
    </div>
);

Movie.propTypes = {
    movie: propTypes.object.isRequired,
    onDelete: propTypes.func.isRequired,
    onErrorPoster: propTypes.func.isRequired
};

export default Movie;