import * as React from 'react';
import * as classNames from 'classnames';
import SwitchField from '../SwitchField';
import TextDisplay from '../TextDisplay';
import Button from '../Button';
import { SortTypes } from '../../actions';

import './style.scss';

interface ISearchBar {
    result: number;
    sortType: string;
    onSortByDate(): void;
    onSortByRating(): void;
};

const SearchBar = ({ result, sortType, onSortByDate, onSortByRating }: ISearchBar) => (
    <div className={classNames('searchbar')}>
        <TextDisplay text={`${result} movies found`} />
        <SwitchField label='Sort by' >
            <Button lowercased withoutBGInactive={sortType !== SortTypes.RELEASE_DATE} sizeSm withoutBG text='release_date' onClick={onSortByDate} />
            <Button lowercased withoutBGInactive={sortType !== SortTypes.RATING} sizeSm withoutBG text='rating' onClick={onSortByRating} />
        </SwitchField>
    </div>
);

export default SearchBar;