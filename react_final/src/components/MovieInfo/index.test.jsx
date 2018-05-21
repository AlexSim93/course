import * as React from 'react';
import {shallow} from 'enzyme';
import MovieInfo from './index';
import StarIconWithRouter from '../../containers/StarIconWithRouter';

describe('MovieInfo component', () => {
    test(
        'Checking StarIcon in component',
        () => {
            const movieInfo = shallow(<MovieInfo movie={{release_date: new Date('2020-01-01')}}/>);
            expect(movieInfo.find(StarIconWithRouter).exists()).toEqual(true);
        }
    ),
    test(
        'Checking title in component',
        () => {
            const movieInfo = shallow(<MovieInfo movie={{title: 'MOVIE TITLE', release_date: new Date('2020-01-01')}}/>);
            expect(movieInfo.find('.movie-info__title').text()).toEqual('MOVIE TITLE');
        }
    ),
    test(
        'Checking release date in component',
        () => {
            const movieInfo = shallow(<MovieInfo movie={{release_date: new Date('2020-01-01')}}/>);
            expect(movieInfo.find('.movie-info__year').text()).toEqual('2020');
        }
    )
});