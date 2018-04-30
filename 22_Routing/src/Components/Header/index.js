import React from 'react';
import classNames from 'classnames';

import './style.scss';

const Header = () => (
    <header className={classNames('header')}>
        <h1 className={classNames('header__title')}>Movies</h1>
    </header>
);

export default Header;