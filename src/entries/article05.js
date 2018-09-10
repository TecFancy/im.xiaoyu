import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article05} from '../pages/article05/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article05 />, document.getElementById('root'));
registerServiceWorker();
