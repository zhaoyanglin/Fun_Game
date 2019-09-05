import { all } from 'redux-saga/effects';
import roomInfoSaga from './roomInfoSaga';
import playerInfoSage from './playerInfoSaga';
import ruleInfoSaga from './ruleInfoSage'
export default function* rootSaga() {
    yield all([
        roomInfoSaga(),
        playerInfoSage(),
        ruleInfoSaga(),

    ]);
}