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
    fetchFavourites: (item: any) => void;
    favourites: IFavourites[]
};

class App extends React.Component<IAppProps> {
    public componentDidMount(){
        const favouritesId = localStorage.getItem('favourites');
        this.props.fetchFavourites(favouritesId);
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
