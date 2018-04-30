import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Loader = () => (
  <div className='app__loader loader'><span className='loader__text'>Loading...</span><Link className='loader__link' to='/'>Back to home page</Link></div>
);

export default Loader;