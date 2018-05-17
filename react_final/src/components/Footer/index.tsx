import * as React from 'react';
import * as classNames from 'classnames';
import Logo from '../Logo';

import './style.scss';

const Footer = () => (
    <footer className={classNames('footer')}>
        <Logo text='netflixroulette'/>
    </footer>
);

export default Footer;