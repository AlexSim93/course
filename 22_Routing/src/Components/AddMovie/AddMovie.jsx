import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';

import './AddMovie.scss';

const AddMovie = ({onAdd}) => (<div className={classNames('add-movie')}><Link to='/add'><Button modifiers={['button_theme_success', 'button_size_lg']} onClick={onAdd}>Add movie</Button></Link></div>);

AddMovie.propTypes = {
    onAdd: propTypes.func.isRequired
};

export default AddMovie;