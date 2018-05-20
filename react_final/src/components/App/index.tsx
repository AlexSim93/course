import * as React from 'react';
import * as classNames from 'classnames';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import {loadFavourites} from '../../store';

import './style.scss';

interface IAppProps {
    history: any;
    match: any;
    getFavourites(item: any): void;
    resetMovies(): void;
};

class App extends React.Component<IAppProps>  {

    public componentDidMount(){
        this.props.getFavourites(loadFavourites());
    }

    public componentDidUpdate(prevProps: IAppProps){
        if(this.props.match.path !== prevProps.match.path){
            this.props.resetMovies();
        }
    }

    public render() {
        return (
            <div className={classNames('app')}>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
