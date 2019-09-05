import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* getPlayers() {
    try {

        const response = yield axios.get('/playersInfo');

        // console.log('this is the get from Sage for players:', response.data);

        yield put({type:'PLAYER_DATA', payload: response.data})

    } catch (error) {
        console.log('error making get request in players saga', error);
    }

}

function* addPlayerInfo(action) {
    try {
        // console.log('this is the playersInfo Sage action:', action.payload);
        
        yield axios.post('/playersInfo', action.payload);

        yield put({ type: 'GET_PLAYERS'})
        
    } catch (error) {
        console.log('error making post request in players saga', error);
    }

}

function* playersInfoSaga() {
    yield takeEvery('ADD_PLAYER', addPlayerInfo);
    yield takeEvery('GET_PLAYERS', getPlayers);

}
export default playersInfoSaga;