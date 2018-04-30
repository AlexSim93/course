import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

const MovieInfo = ({movie}) => (
    <section className={classNames('movie__info')}>
        <h3 className={classNames('movie__title')}>{movie.title||'No title'}</h3>
        <h4 className={classNames('movie__tagline')}>{movie.tagline||'No tagline'}</h4>
        <p className={classNames('movie__overview')}>{movie.overview||'No overview'}</p>
    </section>
);

MovieInfo.propTypes = {
    movie: propTypes.object.isRequired
};

export default MovieInfo;