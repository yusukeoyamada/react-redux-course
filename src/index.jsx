import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

// 作成したstoreを全componentに渡すもの
import { Provider } from 'react-redux';

import reducer from './reducers/index';
import App from './components/App';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
