import React from 'react';
import { Link } from 'react-router-dom';

import './Loader.scss';

const Loader = () => (
  <div className='app__loader loader'><span className='loader__text'>Cannot find a movie by id...</span><Link className='loader__link' to='/'>Back to home page</Link></div>
);

export default Loader;