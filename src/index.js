import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Container/>, document.getElementById('container'));
registerServiceWorker();
