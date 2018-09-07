import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article04} from '../pages/article04/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article04 />, document.getElementById('root'));
registerServiceWorker();
