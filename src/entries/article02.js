import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article02} from '../pages/article02/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article02 />, document.getElementById('root'));
registerServiceWorker();
