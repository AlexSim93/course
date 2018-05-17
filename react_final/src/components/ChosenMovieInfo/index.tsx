import * as React from 'react';
import * as classNames from 'classnames';
import StarIconContainer from '../../containers/StarIconContainer';
import './style.scss';

interface IChosenMovieInfo {
    movie: any
};

const ChosenMovieInfo = ({movie}: IChosenMovieInfo) => (
    <div className={classNames('chosen-movie-info')}>
        <div className={classNames('chosen-movie-info__title-container')}>
            <h2 className={classNames('chosen-movie-info__title')}>{movie.title}</h2>
            <span className={classNames('chosen-movie-info__rating')}>{movie.vote_average}</span>
        </div>
        <span className={classNames('chosen-movie-info__tagline')}>{movie.tagline}</span>
        <div className={classNames('chosen-movie-info__year-runtime-container')}>
            <span className={classNames('chosen-movie-info__year')}>{new Date(movie.release_date).getFullYear()}</span>
            <span className={classNames('chosen-movie-info__runtime')}>{movie.runtime} min.</span>
        </div>
        <span className={classNames('chosen-movie-info__overview')}>{movie.overview}</span>
        <StarIconContainer id={movie.id}/>
    </div>
);

export default ChosenMovieInfo;