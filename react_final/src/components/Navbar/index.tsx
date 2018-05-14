import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Logo from '../Logo/index';
import Button from '../Button/index';

const getButton = (text: string, path: string) => (
    <Link to='/'>
        <Button text={text}/>
    </Link>
);

const Navbar = () => (
    <div>
        <Logo text='netflixroulette'/>
        <Switch>
            <Route exact path='/search/:searchType?/:searchValue?' render={() => getButton('Favourites', '/favourites')}/>
            <Route exact path='/film/:film' render={() => getButton('Search', '/')}/>
            <Route exact path='/favourites' render={() => getButton('Search', '/')}/>       
        </Switch>
    </div>
);

export default Navbar;