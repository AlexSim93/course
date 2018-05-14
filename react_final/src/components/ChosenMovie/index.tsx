import * as React from 'react';
import Poster from '../Poster/index';
import ChosenMovieInfo from '../ChosenMovieInfo/index';

class ChosenMovie extends React.Component<any, any, any>{
    public componentDidMount(){
        this.props.fetchFilm(this.props.url);
    }
    public componentWillReceiveProps(nextProps: any) {
        if(this.props.url !== nextProps.url) {
            this.props.fetchFilm(nextProps.url);
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