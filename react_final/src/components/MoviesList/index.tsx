import * as React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../Movie/index';



class MovieList extends React.Component<any, any, any> {
    public componentDidMount(){
        if(this.props.url){
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