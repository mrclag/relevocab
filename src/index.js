import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase/app';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore
} from 'redux-firestore';
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded
} from 'react-redux-firebase';
import rootReducer from './store/reducers/rootReducer';
import firebaseConfig from './firebase';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
