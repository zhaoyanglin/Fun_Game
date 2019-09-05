import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import playerReducer from './playerReducer';
import ruleReducer from './ruleReducer';

const rootReducer = combineReducers({
    roomReducer,
    playerReducer,
    ruleReducer
});

export default rootReducer;