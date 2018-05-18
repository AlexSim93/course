import * as React from 'react';
import * as classNames from 'classnames';
import { Switch, Route, withRouter } from 'react-router-dom';
import MovieListFavouritesContainer from '../../containers/MovieListFavouritesContainer';
import MovieListSearchResultContainer from '../../containers/MovieListSearchResultContainer';
import MovieListChosenMovieContainer from '../../containers/MovieListChosenMovieContainer';

import './style.scss';

const Main = () => (
    <main className={classNames('main')}>
        <Switch>
            <Route exact 
                path='/search/:searchValue?' 
                component = {withRouter(MovieListSearchResultContainer)}/>
            <Route exact path='/film/:film' component = {withRouter(MovieListChosenMovieContainer)}/>
            <Route exact path='/favourites' component = {withRouter(MovieListFavouritesContainer)}/>
        </Switch>
    </main>
);

export default Main;