import authReducer from './authReducer';
import deckReducer from './deckReducer';
import appReducer from './appReducer';
import cardReducer from './cardReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  deck: deckReducer,
  app: appReducer,
  card: cardReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
