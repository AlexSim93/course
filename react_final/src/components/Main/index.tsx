import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieListContainer from '../../containers/MovieListContainer/index';
import NoMovieFound from '../NoMovieFound/index';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <NoMovieFound />}/>
            <Route exact 
                path='/search/:search' 
                render={({match}) => <MovieListContainer url={`http://localhost:3000/movies?${match.params.search}`}/>}/>
            <Route exact path='/film/:film' render={() => <MovieListContainer />}/>
            <Route exact path='/favourites' render={() => <MovieListContainer url='http://localhost:3000/favourites'/>}/>
        </Switch>
    </main>
);

export default Main;