import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));