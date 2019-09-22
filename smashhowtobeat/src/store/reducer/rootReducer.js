import authReducer from './authReducer';
import matchupReducer from './matchupReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    matchup: matchupReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;