import * as React from 'react';
import {shallow} from 'enzyme';
import ChosenMovie from './index';
import ChosenMovieInfo from '../ChosenMovieInfo';
import Poster from '../Poster';
import Loader from '../Loader';

describe('ChosenMovie component', () => {
    test(
        'Should render ChosenMovieInfo',
        () => {
            const chosenMovie = shallow(<ChosenMovie isLoading={false} hasError={false} movie={{}} fetchMovie={()=>{}}/>);
            expect(chosenMovie.find(ChosenMovieInfo).exists()).toEqual(true);
        }
    );
    test(
        'Should render Poster',
        () => {
            const chosenMovie = shallow(<ChosenMovie isLoading={false} hasError={false} movie={{}} fetchMovie={()=>{}}/>);
            expect(chosenMovie.find(Poster).exists()).toEqual(true);
        }
    );
    test(
        'Should render Loader instead of ChosenMovieInfo',
        () => {
            const chosenMovie = shallow(<ChosenMovie isLoading={true} hasError={false} movie={{}} fetchMovie={()=>{}}/>);
            expect(chosenMovie.find(ChosenMovieInfo).exists()).toEqual(false);
            expect(chosenMovie.find(Poster).exists()).toEqual(false);
            expect(chosenMovie.find(Loader).exists()).toEqual(true);
        }
    );
});