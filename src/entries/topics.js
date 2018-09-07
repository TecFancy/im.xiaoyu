import React from 'react';
import ReactDOM from 'react-dom';
import {view as Topics} from '../pages/topics/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Topics />, document.getElementById('root'));
registerServiceWorker();
