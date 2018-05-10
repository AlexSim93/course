import * as React from 'react';

const Poster = ({movie}: any) => (
    <div>
        <img src={movie.poster_path} alt={movie.title}/>
    </div>
);

export default Poster;