import * as React from 'react';

interface ISortbarInfoProps {
    genre: string
};

const SortbarInfo = ({genre}: ISortbarInfoProps) => (
    <span>Film genres: {genre}</span>
);

export default SortbarInfo;