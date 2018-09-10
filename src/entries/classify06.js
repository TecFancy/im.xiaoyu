import React from 'react';
import ReactDom from 'react-dom';
import {view as Classify06} from '../pages/classify06/';
import registerServiceWorker from '../registerServiceWorker.js';

import './style.css';

ReactDom.render(<Classify06 />, document.getElementById('root'));
registerServiceWorker();
