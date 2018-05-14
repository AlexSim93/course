import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieListContainer from '../../containers/MovieListContainer/index';

const Main = () => (
    <main>
        <Switch>
            <Route exact 
                path='/search/:searchType?/:searchValue?' 
                render={({match}) => <MovieListContainer url={`http://localhost:3000/movies?${match.params.searchType}_like=${match.params.searchValue}`}/>}/>
            <Route exact path='/film/:film' render={() => <MovieListContainer />}/>
            <Route exact path='/favourites' render={() => <MovieListContainer />}/>
        </Switch>
    </main>
);

export default Main;