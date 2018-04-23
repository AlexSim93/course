import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import MovieMain from '../MovieMain/MovieMain.jsx';
import MovieControl from '../MovieControl/MovieControl.jsx';

import './Movie.scss';

const Movie = ({movie, onEdit, onDelete, onErrorPoster}) => (
    <div className={classNames('movie', 'movies__movie')}>
        <MovieMain movie={movie} onErrorPoster={onErrorPoster}/>
        <MovieControl onEdit={()=>onEdit(movie)} onDelete={()=>onDelete(movie)}  id={movie.id}/>
    </div>
);

Movie.propTypes = {
    movie: propTypes.object.isRequired,
    onEdit: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired,
    onErrorPoster: propTypes.func.isRequired
};

export default Movie;