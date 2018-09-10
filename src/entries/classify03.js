import React from 'react';
import ReactDom from 'react-dom';
import {view as Classify03} from '../pages/classify03/';
import registerServiceWorker from '../registerServiceWorker.js';

import './style.css';

ReactDom.render(<Classify03 />, document.getElementById('root'));
registerServiceWorker();
