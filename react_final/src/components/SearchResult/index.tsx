import * as React from 'react';

interface ISearchResult {
    result: number
};

const SearchResult = ({result}: ISearchResult) => (
    <div>
        <span>{result} movies found</span>
    </div>
);

export default SearchResult;