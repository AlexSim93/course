import * as React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';
import MovieList from './index';
import Loader from '../Loader';
import Movie from '../Movie';

const  movies = [{id: 11}, {id: 12}, {id: 13}];

describe('MovieList component', () => {
    test(
        'Should render Loader',
        () => {
            const movieList = shallow(<MovieList isLoading hasError={false} movies={[]} fetchMovies={()=>{}}/>);
            expect(movieList.find(Loader).exists()).toEqual(true);
        }
    );
    test(
        'Should be 3 Links',
        () => {

            const movieList = shallow(<MovieList isLoading={false} hasError={false} movies={movies} fetchMovies={()=>{}}/>);
            expect(movieList.find(Link)).toHaveLength(movies.length);
        }
    );
    test(
        'Should be 3 Movie',
        () => {
            const movieList = shallow(<MovieList isLoading={false} hasError={false} movies={movies} fetchMovies={()=>{}}/>);
            expect(movieList.find(Movie)).toHaveLength(movies.length);
        }
    );
});