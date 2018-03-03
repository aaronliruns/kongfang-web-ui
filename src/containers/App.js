import React from 'react';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import reducer from 'redux/reducers/Reducers';
import {ThreadTabs, ThreadDisplay, MobileThreadTabs} from 'containers/Containers';
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(reducer);

const App = () => (
    <div className='ui page centered grid'>
        <ThreadTabs/>
        <MobileThreadTabs/>
        <ThreadDisplay/>
    </div>
);

const WrappedApp = () => (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

export default WrappedApp;
