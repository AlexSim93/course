import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from '../Form/index';
import Navbar from '../Navbar/index';
import SortbarContainer from '../../containers/SortbarContainer/index';
import ChosenMovieContainer from '../../containers/ChosenMovieContainer/index';

const Header = () => (
    <header>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Form}/>
            <Route exact path='/search/:search' component={Form}/>
            <Route exact path='/film/:film' component={ChosenMovieContainer}/>
        </Switch>
        <SortbarContainer />
    </header>
);

export default Header;