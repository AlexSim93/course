import * as React from 'react';
import Movie from '../Movie/index';



class MovieList extends React.Component<any, any, any> {
    public componentDidMount(){
        this.props.fetchData(this.props.url);
    }

    public render(){
        return (
            <ul>
                {this.props.movies.map((movie:any) => <Movie key={movie.id} movie={movie}/>)}
            </ul>
        );
    }
};

export default MovieList;