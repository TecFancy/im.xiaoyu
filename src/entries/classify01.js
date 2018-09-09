import React from 'react';
import ReactDom from 'react-dom';
import {view as Classify01} from '../pages/classify01/';
import registerServiceWorker from '../registerServiceWorker.js';

import './style.css';

ReactDom.render(<Classify01 />, document.getElementById('root'));
registerServiceWorker();
