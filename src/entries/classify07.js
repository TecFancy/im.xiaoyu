import React from 'react';
import ReactDom from 'react-dom';
import {view as Classify07} from '../pages/classify07/';
import registerServiceWorker from '../registerServiceWorker.js';

import './style.css';

ReactDom.render(<Classify07 />, document.getElementById('root'));
registerServiceWorker();
