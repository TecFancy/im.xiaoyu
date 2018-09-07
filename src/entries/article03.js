import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article03} from '../pages/article03/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article03 />, document.getElementById('root'));
registerServiceWorker();
