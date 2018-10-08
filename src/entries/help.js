import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../Store.js';
import {view as Help} from '../pages/help/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <Help/>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
