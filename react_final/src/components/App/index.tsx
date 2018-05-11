import * as React from 'react';
import Header from '../Header/index';
import Main from '../Main/index';
import Footer from '../Footer/index';

class App extends React.Component<any, any, any> {
    public render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
