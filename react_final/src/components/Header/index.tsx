import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../Form/index';
import Navbar from '../Navbar/index';
import SortbarContainer from '../../containers/SortbarContainer/index';
import ChosenMovieContainer from '../../containers/ChosenMovieContainer/index';

import './style.scss'

const Header = ({favourites}: any) => (
    <header className='header'>
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