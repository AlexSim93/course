import React from 'react';
import propTypes from 'prop-types';

const AddMovie = ({onAdd}) => (<div><button onClick={onAdd}>Add movie</button></div>);

AddMovie.propTypes = {
    onAdd: propTypes.func.isRequired
};

export default AddMovie;