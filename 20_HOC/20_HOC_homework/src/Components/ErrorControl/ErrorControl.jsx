import React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button.jsx';

import './ErrorControl.scss';

const ErrorControl = ({getNumberInsteadOfArray, getDataWithoutTitle, getIncorrectData}) => (
    <div className={classNames('error-control')}>
        <Button mix='error-control__button' onClick={getNumberInsteadOfArray}>Number instead of array</Button>
        <Button mix='error-control__button' onClick={getDataWithoutTitle}>Movie without title</Button>
        <Button mix='error-control__button' onClick={getIncorrectData}>get incorrect data</Button>
    </div>
);

export default ErrorControl;