//combine all reducer in one place call Root Reducer
//rootReducer have all updated state
import chnageTheNumber from './reducer/index';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    chnageTheNumber
})

export default rootReducer;