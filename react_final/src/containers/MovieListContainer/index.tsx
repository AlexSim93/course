import { connect } from 'react-redux';
import { moviesAreLoading, moviesReset, SortTypes } from '../../actions/index';
import MovieList from '../../components/MoviesList/index';

const getOrderedMovies = (movies:any, sortType:any) => {
    switch(sortType){
        case SortTypes.RATING:
            return movies.slice().sort((a:any, b:any ) => b.vote_average - a.vote_average);
        case SortTypes.RELEASE_DATE:
            return movies.slice().sort((a:any, b:any ) => b.release_date - a.release_date);
        default:
            return movies;
    }
};


const mapStateToProps = (state: any, ownProps: any) => ({
    movies: getOrderedMovies(state.entities.movies, state.sortType),
    url: ownProps.url,
    urlBase: 'http://localhost:3000/movies?'
}); 

const mapStateToDispatch = (dispatch: any) => ({
    fetchData: (url: string) => dispatch(moviesAreLoading(url)),
    moviesReset: () => dispatch(moviesReset())
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);