require('../styles/main.scss');
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import CookieTable from './components/CookieTable';
import cookieJar from './reducers';

const store = createStore(cookieJar);

const reload = () => {
  render(
    <CookieTable cookies={store.getState()}/>,
    document.getElementById('container')
  );
};

reload();
store.subscribe(reload);

window.updateCookies = function doSomething(msg) {
  store.dispatch({
    type: 'RECEIVE_COOKIES',
    cookies: msg
  });
};
