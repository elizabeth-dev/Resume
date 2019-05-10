import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'typeface-open-sans';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
