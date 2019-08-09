import { all } from 'redux-saga/effects';
import roomInfoSaga from './roomInfoSaga';

export default function* rootSaga() {
    yield all([
        roomInfoSaga(),
    ]);
}