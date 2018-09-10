import React from 'react';
import ReactDom from 'react-dom';
import {view as Classify04} from '../pages/classify04/';
import registerServiceWorker from '../registerServiceWorker.js';

import './style.css';

ReactDom.render(<Classify04 />, document.getElementById('root'));
registerServiceWorker();
