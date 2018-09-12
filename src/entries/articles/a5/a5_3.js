import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../../Store.js';
import {view as Article} from '../../../pages/articles/a1/a1_3/';
import registerServiceWorker from '../../../registerServiceWorker';

import '../../style.css';
import '../style.css';

ReactDOM.render(
  <Provider store={store}>
    <Article />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
