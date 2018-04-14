import React from 'react';

const MovieControl = (props) => (
    <div>
        <button onClick={props.onEdit}>Edit</button>
        <button onClick={props.onDelete}>Delete</button>
    </div>
);

export default MovieControl;