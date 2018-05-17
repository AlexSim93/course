import * as React from 'react';
import * as classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import FormContainer from '../../containers/FormContainer';
import Navbar from '../Navbar';
import SortbarContainer from '../../containers/SortbarContainer';
import ChosenMovieContainer from '../../containers/ChosenMovieContainer';

import './style.scss'

const Header = ({favourites}: any) => (
    <header className={classNames('header')}>
        <Navbar />
        <Switch>
            <Route exact 
                path='/search/:searchValue?' 
                render={({history, match})=><FormContainer history={history} match={match}/>}/>
            <Route exact 
                path='/film/:film' 
                render={({match}) => <ChosenMovieContainer match={match} favourites={favourites}/>}/>
        </Switch>
        <SortbarContainer />
    </header>
);

export default Header;