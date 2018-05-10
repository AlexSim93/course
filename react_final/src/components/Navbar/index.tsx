import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Logo from '../Logo/index';
import Button from '../Button/index';

const getButton = () => (
    <Button text='Search'/>
);

const Navbar = () => (
    <div>
        <Logo text='netflixroulette'/>
        <Switch>
            <Route exact path='/film/:film' render={getButton}/>
            <Route exact path='/favourites' render={getButton}/>       
        </Switch>
    </div>
);

export default Navbar;