import * as React from 'react';
import * as classNames from 'classnames';
import Poster from '../Poster';
import ChosenMovieInfo from '../ChosenMovieInfo';

import './style.scss';

interface IChosenMovie {
    url?: string;
    movie: any;
    fetchMovie(url?: string): void;
};

class ChosenMovie extends React.Component<IChosenMovie>{
    public componentDidMount(){
        this.props.fetchMovie(this.props.url);
    }
    public componentDidUpdate(prevProps: any) {
        if(this.props.url !== prevProps.url) {
            this.props.fetchMovie(this.props.url);
        }
    }
    public render(){
        return (
            <div className={classNames('chosen-movie')}>
                <Poster movie={this.props.movie} />
                <ChosenMovieInfo movie={this.props.movie} />
            </div>
        );
    }
}

export default ChosenMovie;