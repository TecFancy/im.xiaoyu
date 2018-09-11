import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article08} from '../pages/article08/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article08 />, document.getElementById('root'));
registerServiceWorker();
