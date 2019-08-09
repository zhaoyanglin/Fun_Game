import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRoomInfo() {
    try {
        const response = yield axios.get('/roomInfo');

        yield put({ type: 'ROOM_DATA', payload: response.data })
    } catch (error) {
        console.log('error making GET request in user location saga', error);
    }

}

function* updateRoomInfo() {

    try { 
          
        yield axios.post('/roomInfo');

        yield put({ type: 'GET_ROOM_INFO' });
    } catch (error) {
        console.log('error making POST request updateRoomInfo saga', error);
    }
}

function* roomInfoSaga() {
    yield takeEvery('GET_ROOM_INFO', getRoomInfo);
    yield takeEvery('ROOM_INFO', updateRoomInfo);


}
export default roomInfoSaga;