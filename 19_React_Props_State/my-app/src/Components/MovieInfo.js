import React from 'react';
import './MovieInfo.scss'
const MovieInfo = ({movie}) => (
    <div>
        <img src={movie.poster_path} alt={movie.title}/>
        <section>
            <div>Title: <span>{movie.title}</span></div>
            <div>Tagline: <span>{movie.tagline}</span></div>
            <div>Vote average: <span>{movie.vote_average}</span></div>
            <div>Vote count: <span>{movie.vote_count}</span></div>
            <div>Release date: <span>{movie.release_date}</span></div>
            <div>Overview: <span>{movie.overview}</span></div>
            <div>Budget: <span>{movie.budget}</span></div>
            <div>Revenue: <span>{movie.revenue}</span></div>
            {/* <div>Genres: {movie.genres.map((element, index )=> <span key={index}> {element} </span>)}</div> */}
        </section>
    </div>
    );

export default MovieInfo;