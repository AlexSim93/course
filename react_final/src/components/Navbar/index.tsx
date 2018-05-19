import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as classNames from 'classnames';
import Logo from '../Logo';
import Button from '../Button';

import './style.scss';


const Navbar = ({favourites, fetchMovies }: any) => (
    <nav className={classNames('navbar')}>
        <Logo text='netflixroulette' />
        <Switch>
            <Route exact path='/search/:searchValue?' render={() => <Link to='/favourites/'><Button light text='Favourites'/></Link>} />
            <Route exact path='/film/:film' render={(): JSX.Element => <Link to='/search/'><Button light text='Search'/></Link>} />
            <Route exact path='/favourites' render={(): JSX.Element => <Link to='/search/'><Button light text='Search'/></Link>} />
        </Switch>
    </nav>
);

export default Navbar;