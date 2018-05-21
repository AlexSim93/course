import * as React from 'react';
import {shallow} from 'enzyme';
import Movie from './index';
import Poster from '../Poster';
import MovieInfo from '../MovieInfo';

describe('Movie component', () => {
    test(
        'Should render Poster',
        () => {
            const movie = shallow(<Movie />);
            expect(movie.find(Poster).exists()).toEqual(true);
        }
    ),
    test(
        'Should render MovieInfo',
        () => {
            const movie = shallow(<Movie />);
            expect(movie.find(MovieInfo).exists()).toEqual(true);
        }
    )
});