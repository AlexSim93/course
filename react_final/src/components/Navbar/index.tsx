import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as classNames from 'classnames';
import Logo from '../Logo';
import Button from '../Button';

import './style.scss';

const Navbar = ({history}: any) => (
    <nav className={classNames('navbar')}>
        <Logo text='netflixroulette'/>
        <Switch>
            <Route exact path='/search/:searchValue?' render={() => <Button light text='Favourites' onClick={() => history.push('/favourites/')}/>}/>
            <Route exact path='/film/:film' render={() : JSX.Element => <Button light text='Search' onClick={() => history.push('/search/')}/>}/>
            <Route exact path='/favourites' render={() : JSX.Element => <Button light text='Search' onClick={() => history.push('/search/')}/>}/>       
        </Switch>
    </nav>
);

export default Navbar;