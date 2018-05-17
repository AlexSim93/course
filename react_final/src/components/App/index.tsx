import * as React from 'react';
import * as classNames from 'classnames';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import './style.scss';

interface IFavourites {
    id: string | number;
}

interface IAppProps {
    url: string;
    fetchFavourites: (url: string) => void;
    favourites: IFavourites[]
};

class App extends React.Component<IAppProps> {
    public componentDidMount(){
        this.props.fetchFavourites(this.props.url);
    }

    public render() {
        return (
            <div className={classNames('app')}>
                <Header favourites={this.props.favourites}/>
                <Main favourites={this.props.favourites}/>
                <Footer />
            </div>
        );
    }
}

export default App;
