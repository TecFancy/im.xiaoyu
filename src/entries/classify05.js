import React from 'react';
import ReactDom from 'react-dom';
import {view as Classify05} from '../pages/classify05/';
import registerServiceWorker from '../registerServiceWorker.js';

import './style.css';

ReactDom.render(<Classify05 />, document.getElementById('root'));
registerServiceWorker();
