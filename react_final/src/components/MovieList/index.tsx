import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';
import Movie from '../Movie/index';
import TextDisplay from '../TextDisplay';

import './style.scss';

interface IMovieList {
    url?: string;
    movies: any;
    fetchData(url: string): void;
};

class MovieList extends React.Component<IMovieList> {
    public componentDidMount(){
        if(this.props.url){
            this.props.fetchData(`http://localhost:3000/movies?${this.props.url}`);
        }
    }
    public render(){
        return (
            <section className='movie-list'>
                {this.props.movies.length > 0 ? this.props.movies.map((movie:any) => <Link className={classNames('movie-list__movie-link')} to={`/film/${movie.title}`} key={movie.id.toString()}><Movie  movie={movie}/></Link>) : <div className={classNames('movie-list__no-movie-container')}><TextDisplay sizeLg light text='No films found'/></div>}
            </section>
        );
    }
};

export default MovieList;