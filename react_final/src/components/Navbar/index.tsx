import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Logo from '../Logo/index';
import Button from '../Button/index';

import './style.scss';

const getButton = (text: string, path: string) => (
    <Link to={path}>
        <Button text={text}/>
    </Link>
);

const Navbar = () => (
    <div className='navbar'>
        <Logo text='netflixroulette'/>
        <Switch>
            <Route exact path='/search/:searchType?/:searchValue?' render={() => getButton('Favourites', '/favourites')}/>
            <Route exact path='/film/:film' render={() => getButton('Search', '/search/')}/>
            <Route exact path='/favourites' render={() => getButton('Search', '/search/')}/>       
        </Switch>
    </div>
);

export default Navbar;