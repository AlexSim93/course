import React from 'react';
import propTypes from 'prop-types';
import MovieMain from '../MovieMain/MovieMain.jsx';
import MovieControl from '../MovieControl/MovieControl.jsx';

const Movie = ({movie, onEdit, onDelete}) => (
    <div>
        <MovieMain movie={movie} />
        <MovieControl onEdit={()=>onEdit(movie)} onDelete={()=>onDelete(movie)}/>
    </div>
);

Movie.propTypes = {
    movie: propTypes.object.isRequired,
    onEdit: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
};

export default Movie;