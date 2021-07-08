import Counter from './Counter'
import loggedReducer from './loggedReducer'
import { combineReducers } from 'redux'
const allReducer=combineReducers({
    Counter,loggedReducer
})
export default allReducer;