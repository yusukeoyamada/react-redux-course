import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import EventsIndex from './components/events_index';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
