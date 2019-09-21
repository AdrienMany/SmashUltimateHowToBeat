import authReducer from './authReducer';
import matchupReducer from './matchupReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    matchup: matchupReducer,
    firestore: firestoreReducer
})

export default rootReducer;