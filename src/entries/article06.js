import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article06} from '../pages/article06/';
import registerServiceWorker from '../registerServiceWorker';

import './style.css';

ReactDOM.render(<Article06 />, document.getElementById('root'));
registerServiceWorker();
