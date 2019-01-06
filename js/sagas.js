import {delay} from 'redux-saga';
import {all, call, put, takeEvery} from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({type: 'INCREMENT'});
}

function* watchIncrementSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementSaga()
  ])
}