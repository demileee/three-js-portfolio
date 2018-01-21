import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Simple from './Three';
import Main from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Simple/>, document.getElementById('threeJS'));
ReactDOM.render(<Main/>, document.getElementById('head'));
registerServiceWorker();
