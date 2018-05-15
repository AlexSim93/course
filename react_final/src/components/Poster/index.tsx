import * as React from 'react';
import './style.scss';

const Poster = ({movie}: any) => (
    <div className='poster'>
        <img className='poster__img' src={movie.poster_path} alt={movie.title}/>
    </div>
);

export default Poster;