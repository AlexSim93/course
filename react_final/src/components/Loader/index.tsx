import * as React from 'react';
import * as classNames from 'classnames';
import loader_img from '../../images/loading_spinner.gif';

const Loader = () => (
    <div className={classNames('loader')}>
        <img src={loader_img} alt='Loading' className={classNames('loader__image')}/>
    </div>
);

export default Loader;