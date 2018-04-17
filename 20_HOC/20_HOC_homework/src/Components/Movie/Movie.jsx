import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import MovieMain from '../MovieMain/MovieMain.jsx';
import MovieControl from '../MovieControl/MovieControl.jsx';

import './Movie.scss';

const Movie = ({movie, onEdit, onDelete}) => {
    if(!movie.title){
        throw new Error('Movie without title');
    }
    return (
        <div className={classNames('movie', 'movies__movie')}>
            <MovieMain movie={movie} />
            <MovieControl onEdit={()=>onEdit(movie)} onDelete={()=>onDelete(movie)}/>
        </div>
    );
};

Movie.propTypes = {
    movie: propTypes.object.isRequired,
    onEdit: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
};

export default Movie;