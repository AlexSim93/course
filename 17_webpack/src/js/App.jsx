import React from 'react';
import {render} from 'react-dom';
import Article from './Article.jsx'
require('../scss/index.scss');


render(<Article title='title' text='Test webpack'/>,
document.getElementById('root'));
