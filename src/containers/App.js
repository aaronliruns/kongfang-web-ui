import React from 'react';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import reducer from 'redux/reducers/Reducers';
import {ThreadTabs, ThreadDisplay, MobileThreadTabs} from 'containers/Containers';


const store = createStore(reducer);

const App = () => (
    <div className='ui page grid'>
        <ThreadTabs/>
        <MobileThreadTabs/>
        <ThreadDisplay/>
    </div>
);

const WrappedApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default WrappedApp;
