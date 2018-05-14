import * as React from 'react';
import Header from '../Header/index';
import Main from '../Main/index';
import Footer from '../Footer/index';

class App extends React.Component<any, any, any> {
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
