import * as React from 'react';
import * as classNames from 'classnames';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import {loadFavourites} from '../../store';

import './style.scss';

interface IAppProps {
    getFavourites(item: any): void;
};

class App extends React.Component<IAppProps> {
    public componentDidMount(){
        this.props.getFavourites(loadFavourites());
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
