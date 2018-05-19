import * as React from 'react';
import * as classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import FormWithRouter from '../../containers/FormWithRouter';
import NavbarWithRouter from '../../containers/NavbarWithRouter';
import SearchbarWithRouter from '../../containers/SearchbarWithRouter';
import ChosenMovieWithRouter from '../../containers/ChosenMovieWithRouter';

import './style.scss'

const Header = () => (
    <header className={classNames('header')}>
        <NavbarWithRouter />
        <Switch>
            <Route exact 
                path='/search/:searchValue?'
                component={FormWithRouter}/>
            <Route exact 
                path='/film/:film' 
                component={ChosenMovieWithRouter}/>
        </Switch>
        <SearchbarWithRouter />
    </header>
);

export default Header;