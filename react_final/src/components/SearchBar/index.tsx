import * as React from 'react';
import * as classNames from 'classnames';
import SwitchField from '../SwitchField';
import TextDisplay from '../TextDisplay';
import Button from '../Button';

import './style.scss';

interface ISearchBar {
    result: number;
    onSortByDate(): void;
    onSortByRating(): void;
};

const SearchBar = ({ result, onSortByDate, onSortByRating }: ISearchBar) => (
    <div className={classNames('searchbar')}>
        <TextDisplay text={`${result} movies found`} />
        <SwitchField label='sort by' >
            <Button sizeSm withoutBG text='release_date' onClick={onSortByDate} />
            <Button sizeSm withoutBG text='rating' onClick={onSortByRating} />
        </SwitchField>
    </div>
);

export default SearchBar;