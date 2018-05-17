import * as React from 'react';
import * as classNames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import TextDisplay from '../TextDisplay';
import SearchBar from '../SearchBar';

import './style.scss';


interface ISortbar {
    result: number;
    genre: string;
    onSortByDate(): void;
    onSortByRating(): void; 
};

const Sortbar = ({result, genre, onSortByDate, onSortByRating}: ISortbar) => (
    <div className={classNames('sortbar')}>
        <Switch>
            <Route exact
                path='/search/:searchType?/:searchValue?' 
                render={() => 
                    <SearchBar result={result} onSortByDate={onSortByDate} onSortByRating={onSortByRating}/>}
            />
            <Route exact
                path='/film/:film'
                render={() : JSX.Element => <TextDisplay text={`genre of films: ${genre}`}/>}
            />
            <Route exact
                path='/favourites'
                render={() : JSX.Element => <TextDisplay text={'Your favourite films'} />}
            />
        </Switch>
    </div>
);

export default Sortbar;