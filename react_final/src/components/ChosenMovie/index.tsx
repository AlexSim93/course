import * as React from 'react';
import * as classNames from 'classnames';
import Poster from '../Poster';
import ChosenMovieInfo from '../ChosenMovieInfo';

import './style.scss';

interface IChosenMovie {
    url?: string;
    film: any;
    fetchFilm(url?: string): void;
};

class ChosenMovie extends React.Component<IChosenMovie>{
    public componentDidMount(){
        console.log('Movie mounting');
        this.props.fetchFilm(this.props.url);
    }
    public componentDidUpdate(prevProps: any) {
        if(this.props.url !== prevProps.url) {
            this.props.fetchFilm(this.props.url);
        }
    }
    public render(){
        return (
            <div className={classNames('chosen-movie')}>
                <Poster movie={this.props.film} />
                <ChosenMovieInfo movie={this.props.film} />
            </div>
        );
    }
}

export default ChosenMovie;