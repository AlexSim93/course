import * as React from 'react';
import StarIcon from '../StarIcon';

const MovieInfo = ({movie, favourites, addToFavourites, removeFromFavourites}: any) => (
    <div>
        <h2>{movie.title}</h2>
        <span>{movie.release_date.getFullYear()}</span>
        <StarIcon isFavourite={favourites.some((el: any)=>el.id === movie.id)} addToFavourites={() => addToFavourites(movie.id)} removeFromFavourites={()=>removeFromFavourites(movie.id)}/>
        <span>{Array.isArray(movie.genres) ? movie.genres.join('&') : movie.genres}</span>
    </div>
);

export default MovieInfo;