import React from 'react';
import { render } from 'react-dom';

import './Styles/index.css';
import App from './App';
import registerServiceWorker from './Scripts/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
