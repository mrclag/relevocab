import authReducer from './authReducer';
import deckReducer from './deckReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  deck: deckReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
