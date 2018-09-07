import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article01} from '../pages/article01/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article01 />, document.getElementById('root'));
registerServiceWorker();
