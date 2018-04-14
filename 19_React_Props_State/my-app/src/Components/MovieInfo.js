import React from 'react';
import './MovieInfo.scss'
const MovieInfo = ({movie}) => (
    <div>
        <img src={movie.poster_path} alt={movie.title}/>
        <section>
            <div>Title: <span>{movie.title}</span></div>
            <div>Tagline: <span>{movie.tagline}</span></div>
            <div>Overview: <span>{movie.overview}</span></div>
        </section>
    </div>
    );

export default MovieInfo;