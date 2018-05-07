import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Containers/App/index';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';

const TSExample = () => (<div>Example</div>);

ReactDOM.render(
    <TSExample />, 
    document.getElementById('root'));