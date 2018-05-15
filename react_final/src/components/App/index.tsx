import * as React from 'react';
import Header from '../Header/index';
import Main from '../Main/index';
import Footer from '../Footer/index';

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
            <div>
                <Header favourites={this.props.favourites}/>
                <Main favourites={this.props.favourites}/>
                <Footer />
            </div>
        );
    }
}

export default App;
