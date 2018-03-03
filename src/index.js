import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from 'containers/App';
import 'semantic/dist/semantic.min.css';
import registerServiceWorker from 'utils/registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
