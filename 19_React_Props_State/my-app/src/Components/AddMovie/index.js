import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/index';

import './style.scss';

const AddMovie = ({onAdd}) => (<div className={classNames('add-movie')}><Button modifiers={['button_theme_success', 'button_size_lg']} onClick={onAdd}>Add movie</Button></div>);

AddMovie.propTypes = {
    onAdd: propTypes.func.isRequired
};

export default AddMovie;