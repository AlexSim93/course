import * as React from 'react';

interface ISortbarInfoProps {
    director: string
};

const SortbarInfo = ({director}: ISortbarInfoProps) => (
    <span>Films by {director}</span>
);

export default SortbarInfo;