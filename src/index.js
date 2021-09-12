import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Store/Reducers/rootReducer';
import { Provider } from 'react-redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import fbConfig from './Firebase/fbConfig';

import './index.css';

const store = createStore(rootReducer,
  compose(
    reactReduxFirebase(fbConfig),
    reduxFirestore(fbConfig),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  ));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App /> 
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

