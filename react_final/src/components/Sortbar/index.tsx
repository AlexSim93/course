import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import SwitchField from '../SwitchField/index';
import SearchResult from '../SearchResult/index';
import SortbarInfo from '../SortbarInfo/index';
import SortbarFavouritesInfo from '../SortbarFavouritesInfo/index';

interface ISortbar {
    result: number,
    onSortByDate(): void,
    onSortByRating(): void 
};

const Sortbar = ({result, onSortByDate, onSortByRating}: ISortbar) => (
    <div>
        <Switch>
            <Route exact
                path='/search/:search' 
                render={() => 
                    <div> 
                        <SearchResult result={result}/>
                        <SwitchField label='sort by' buttons={[{text: 'release date', onClick: onSortByDate}, {text: 'rating', onClick: onSortByRating}]}/>
                    </div>}
            />
            <Route exact
                path='/film/:film'
                render={()=> <SortbarInfo director='Tarantino'/>}
            />
            <Route exact
                path='/favourites'
                render={()=> <SortbarFavouritesInfo />}
            />
        </Switch>
    </div>
);

export default Sortbar;