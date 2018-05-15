import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import SwitchField from '../SwitchField/index';
import SearchResult from '../SearchResult/index';
import SortbarInfo from '../SortbarInfo/index';
import SortbarFavouritesInfo from '../SortbarFavouritesInfo/index';
import Button from '../Button/index';

import './style.scss';

interface ISortbar {
    result: number,
    genre: string,
    onSortByDate(): void,
    onSortByRating(): void 
};

const Sortbar = ({result, genre, onSortByDate, onSortByRating}: ISortbar) => (
    <div className='sortbar'>
        <Switch>
            <Route exact
                path='/search/:searchType?/:searchValue?' 
                render={() => 
                    <div> 
                        <SearchResult result={result}/>
                        <SwitchField label='sort by' >
                            <Button text='release_date' onClick={onSortByDate}/>
                            <Button text='rating' onClick={onSortByRating}/>
                        </SwitchField>
                    </div>}
            />
            <Route exact
                path='/film/:film'
                render={() : JSX.Element => <SortbarInfo genre={genre}/>}
            />
            <Route exact
                path='/favourites'
                render={() : JSX.Element => <SortbarFavouritesInfo />}
            />
        </Switch>
    </div>
);

export default Sortbar;