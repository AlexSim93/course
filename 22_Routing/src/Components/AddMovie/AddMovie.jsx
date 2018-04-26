import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';

import './AddMovie.scss';

const AddMovie = () => (
    <div className={classNames('add-movie')}>
        <Link to='/add'>
            <Button modifiers={['button_theme_success', 'button_size_lg']}>Add movie</Button>
        </Link>
    </div>
);

export default AddMovie;