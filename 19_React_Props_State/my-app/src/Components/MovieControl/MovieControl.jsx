import React from 'react';
import propTypes from 'prop-types';

const MovieControl = ({onEdit, onDelete}) => (
    <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </div>
);

MovieControl.propTypes = {
    onEdit: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
}

export default MovieControl;