import * as React from 'react';
import {shallow} from 'enzyme';
import ChosenMovieInfo from './index';
import StarIconWithRouter from '../../containers/StarIconWithRouter';

describe('ChosenMovieInfo component', () => {
    it(
        'Should render StarIcon',
        () => {
            const chosenMovieInfo = shallow(<ChosenMovieInfo movie={{}}/>);
            expect(chosenMovieInfo.find(StarIconWithRouter).exists()).toEqual(true);
        }
    );
    it(
        'Should render title',
        () => {
            const chosenMovieInfo = shallow(<ChosenMovieInfo movie={{title: 'MOVIE TITLE'}}/>);
            expect(chosenMovieInfo.find('.chosen-movie-info__title').text()).toEqual('MOVIE TITLE');
        }
    );
    it(
        'Should render release date',
        () => {
            const chosenMovieInfo = shallow(<ChosenMovieInfo movie={{release_date: 2020}}/>);
            expect(chosenMovieInfo.find('.chosen-movie-info__year').text()).toEqual('2020');
        }
    );
});