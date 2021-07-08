import Counter from './Counter';
import loggedReducer  from './loggedReducer';
import { combineReducers } from 'redux';
const allReducers=combineReducers({
    Counter,
    loggedReducer
})
export default allReducers;
