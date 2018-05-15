import * as React from 'react';
import Poster from '../Poster/index';
import ChosenMovieInfo from '../ChosenMovieInfo/index';

interface IChosenMovie {
    url?: string;
    film: any;
    fetchFilm(url?: string): void;
};

class ChosenMovie extends React.Component<IChosenMovie>{
    public componentDidMount(){
        this.props.fetchFilm(this.props.url);
    }
    public componentDidUpdate(prevProps: any) {
        if(this.props.url !== prevProps.url) {
            this.props.fetchFilm(this.props.url);
        }
    }
    public render(){
        return (
            <div>
                <Poster movie={this.props.film} />
                <ChosenMovieInfo movie={this.props.film} />
            </div>
        );
    }
}

export default ChosenMovie;