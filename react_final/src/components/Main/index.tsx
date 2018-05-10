import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesListContainer from '../../containers/MovieListContainer/index';
import NoMovieFound from '../NoMovieFound/index';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <NoMovieFound/>}/>
            <Route exact path='/search/:search' render={()=> <MoviesListContainer />}/>
            <Route exact path='/film/:film' render={()=> <MoviesListContainer />}/>
            <Route exact path='/favourites' render={()=> <MoviesListContainer />}/>
        </Switch>
    </main>
);

export default Main;