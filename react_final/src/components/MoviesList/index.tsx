import * as React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/index';
import TextDisplay from '../TextDisplay';

import './style.scss';

interface IMovieList {
    url?: string;
    urlBase: string;
    movies: any;
    fetchData(url: string): void;
    moviesReset(): void;
};

class MovieList extends React.Component<IMovieList> {
    public componentDidMount(){
        if(this.props.url){
            this.props.fetchData(`${this.props.urlBase}${this.props.url}`);
        }
    }
    public componentDidUpdate(prevProps: IMovieList) {
        if(this.props.url !== prevProps.url) {
            if( this.props.url ){
                this.props.fetchData(`${this.props.urlBase}${this.props.url}`);
            } else {
                this.props.moviesReset();
            }
        }
    }
    public render(){
        return (
            <section className='movie-list'>
                {this.props.movies.length > 0 ? this.props.movies.map((movie:any) => <Link className='movie-list__movie-link' to={`/film/${movie.title}`} key={movie.id.toString()}><Movie  movie={movie}/></Link>) : <TextDisplay sizeLg light text='No films found'/>}
            </section>
        );
    }
};

export default MovieList;