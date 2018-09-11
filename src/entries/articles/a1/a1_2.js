import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article} from '../../../pages/articles/a1/a1_2/';
import registerServiceWorker from '../../../registerServiceWorker';

ReactDOM.render(<Article />, document.getElementById('root'));
registerServiceWorker();