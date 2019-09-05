import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRules() {
    try {

        const response = yield axios.get('/ruleInfo');

        // console.log('this is the response.data in rule saga:',response.data);
        
        yield put({ type: 'RULE_DATA', payload: response.data })

    } catch (error) {
        console.log('error making GET request in rule info saga', error);
    }

}


function* ruleInfoSaga() {
    yield takeEvery('GET_RULES', getRules);


}
export default ruleInfoSaga;