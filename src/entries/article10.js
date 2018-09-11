import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article10} from '../pages/article10/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article10 />, document.getElementById('root'));
registerServiceWorker();
