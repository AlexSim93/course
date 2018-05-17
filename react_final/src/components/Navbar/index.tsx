import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as classNames from 'classnames';
import Logo from '../Logo';
import Button from '../Button';

import './style.scss';

const getButtonWithLink = (text: string, path: string) : JSX.Element => (
    <Link className={classNames('Link_reset-default')} to={path}>
        <Button light text={text}/>
    </Link>
);

const Navbar = () => (
    <div className={classNames('navbar')}>
        <Logo text='netflixroulette'/>
        <Switch>
            <Route exact path='/search/:searchType?/:searchValue?' render={() => getButtonWithLink('Favourites', '/favourites')}/>
            <Route exact path='/film/:film' render={() : JSX.Element => getButtonWithLink('Search', '/search/')}/>
            <Route exact path='/favourites' render={() : JSX.Element => getButtonWithLink('Search', '/search/')}/>       
        </Switch>
    </div>
);

export default Navbar;