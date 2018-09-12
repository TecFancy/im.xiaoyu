import React from 'react';
import ReactDOM from 'react-dom';
import {view as Article} from '../../../pages/articles/a1/a1_3/';
import registerServiceWorker from '../../../registerServiceWorker';

import '../../style.css';
import '../style.css';

ReactDOM.render(<Article />, document.getElementById('root'));
registerServiceWorker();
