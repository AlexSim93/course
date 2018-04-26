import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import MovieMain from '../MovieMain/MovieMain.jsx';
import MovieControl from '../MovieControl/MovieControl.jsx';

import './Movie.scss';

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