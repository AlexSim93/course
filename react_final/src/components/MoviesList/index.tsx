import * as React from 'react';
import Movie from '../Movie/index';



class MovieList extends React.Component<any, any, any> {
    public componentDidMount(){
        if(this.props.url){
            this.props.fetchData(this.props.url);
        }
        this.props.fetchFavourites(this.props.url);
    }

    public render(){
        return (
            <section>
                {this.props.movies.map((movie:any) => <Movie key={movie.id} movie={movie}/>)}
            </section>
        );
    }
};

export default MovieList;