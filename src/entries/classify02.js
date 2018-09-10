import React from 'react';
import ReactDom from 'react-dom';
import {view as Classify02} from '../pages/classify02/';
import registerServiceWorker from '../registerServiceWorker.js';

import './style.css';

ReactDom.render(<Classify02 />, document.getElementById('root'));
registerServiceWorker();
