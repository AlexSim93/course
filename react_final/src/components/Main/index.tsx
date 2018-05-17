import * as React from 'react';
import * as classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import MovieListContainer from '../../containers/MovieListContainer';

import './style.scss';

const Main = ({favourites}: any) => (
    <main className={classNames('main')}>
        <Switch>
            <Route exact 
                path='/search/:searchType?/:searchValue?' 
                render={({match}) => <MovieListContainer url={match.params.searchType && match.params.searchValue && `${match.params.searchType}_like=${match.params.searchValue}`}/>}/>
            <Route exact path='/film/:film' render={() => <MovieListContainer />}/>
            <Route exact path='/favourites' render={() => <MovieListContainer url={`${favourites.map((element: any) => `id=${element.id}`).join('&')}`}/>}/>
        </Switch>
    </main>
);

export default Main;