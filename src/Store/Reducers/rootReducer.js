import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer';
import fileReducer from './fileReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    images: fileReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;