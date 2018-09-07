import React from 'react';
import ReactDOM from 'react-dom';
import {view as About} from '../pages/about/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<About />, document.getElementById('root'));
registerServiceWorker();
