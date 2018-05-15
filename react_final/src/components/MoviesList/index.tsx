import * as React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/index';

interface IMovieList {
    url?: string;
    movies: any;
    fetchData(url: string): void;
};

class MovieList extends React.Component<IMovieList> {
    public componentDidMount(){
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
            <section>
                {this.props.movies.map((movie:any) => <Link to={`/film/${movie.title}`} key={movie.id.toString()}><Movie  movie={movie}/></Link>)}
            </section>
        );
    }
};

export default MovieList;