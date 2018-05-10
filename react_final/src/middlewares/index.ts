import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { MOVIES_ARE_LOADING, moviesFetchDataSuccess, moviesHaveError } from '../actions/index'; 

export function* watcherSaga() {
    yield takeLatest(MOVIES_ARE_LOADING, workerSaga);
};

const fetchMovies = (url: string) => (
    axios({
        method: 'get',
        url
    })
);

function* workerSaga(action: any) {
    try {
      const response = yield call(fetchMovies, action.url);
      const movies = response.data;
  
      yield put(moviesFetchDataSuccess(movies));
    
    } catch (error) {
      yield put(moviesHaveError());
    }
};