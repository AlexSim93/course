import * as React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/index';

import './style.scss';

interface IMovieList {
    url?: string;
    movies: any;
    fetchData(url: string): void;
};

class MovieList extends React.Component<IMovieList> {
    public componentDidMount(){
        console.log('Mounting');
        if(this.props.url){
            this.props.fetchData(this.props.url);
        }
    }
    public componentDidUpdate(prevProps: IMovieList) {
        if(this.props.url && this.props.url !== prevProps.url) {
            this.props.fetchData(this.props.url);
        }
    }
    public render(){
        return (
            <section className='movie-list'>
                {this.props.movies.map((movie:any) => <Link className='movie-list__movie-link' to={`/film/${movie.title}`} key={movie.id.toString()}><Movie  movie={movie}/></Link>)}
            </section>
        );
    }
};

export default MovieList;