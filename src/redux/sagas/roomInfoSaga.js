import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRoomInfo() {
    try {
        const response = yield axios.get('/roomInfo');
        // console.log('this is the room info saga for response.data', response.data);
        
        yield put({ type: 'ROOM_DATA', payload: response.data })

    } catch (error) {
        console.log('error making GET request in roominfo saga', error);
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

function* exitGame() {
    try {


        yield axios.post('/roomInfo/exit');
        yield put({ type: 'GET_ROOM_INFO' })

    } catch (error) {
        console.log('error making POST request exit game room saga', error);
    }
}

function* roomInfoSaga() {
    yield takeEvery('GET_ROOM_INFO', getRoomInfo);
    yield takeEvery('ROOM_INFO', updateRoomInfo);
yield takeEvery('EXIT_GAME', exitGame)

}
export default roomInfoSaga;