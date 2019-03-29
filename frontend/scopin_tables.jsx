import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { preSearch } from './actions/restaurant_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    debugger
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        favorites: window.currentUser.favorited_restaurant_i
      }
    };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  
  //TESTING
  window.store = store;
  window.preSearch = preSearch;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING
  nt_i
  window.addEventListener(`hashchange`, () => {
    window.scrollTo(0, 0);
  });
}); 
