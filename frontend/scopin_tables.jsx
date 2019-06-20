import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { preSearch } from './actions/restaurant_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        favorites: window.currentUser.favorited_restaurant_ids
      }
    };
    store = configureStore(preloadedState);
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
  window.addEventListener(`hashchange`, () => {
    window.scrollTo(0, 0);
  });
}); 
