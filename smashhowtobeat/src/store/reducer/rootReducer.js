import authReducer from './authReducer';
import matchupReducer from './matchupReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    matchup: matchupReducer
})

export default rootReducer;