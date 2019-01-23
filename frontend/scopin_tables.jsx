//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
// import * as SessionApiUtils from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     session: { id: window.currentUser.id },
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.login = SessionApiUtils.login;
  // window.logout = SessionApiUtils.logout;
  // window.signup = SessionApiUtils.signup;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
}); 
