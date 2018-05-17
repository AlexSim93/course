import * as React from 'react';
import * as classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import Form from '../Form';
import Navbar from '../Navbar';
import SortbarContainer from '../../containers/SortbarContainer';
import ChosenMovieContainer from '../../containers/ChosenMovieContainer';

import './style.scss'

const Header = ({favourites}: any) => (
    <header className={classNames('header')}>
        <Navbar />
        <Switch>
            <Route exact 
                path='/search/:searchType?/:searchValue?' 
                render={({history})=><Form history={history}/>}/>
            <Route exact 
                path='/film/:film' 
                render={({match}) => <ChosenMovieContainer match={match} favourites={favourites}/>}/>
        </Switch>
        <SortbarContainer />
    </header>
);

export default Header;