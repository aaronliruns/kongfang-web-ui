import React from 'react';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import reducer from 'redux/reducers/Reducers';
import {mapDispatchToTabsProps, mapDispatchToThreadProps, mapStateToTabsProps, mapStateToThreadProps, mergeThreadProps} from 'redux/maps/Maps';
import {Tabs, Thread} from 'components/Components';


const store = createStore(reducer);




const ThreadTabs = connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);
const ThreadDisplay = connect(mapStateToThreadProps, mapDispatchToThreadProps, mergeThreadProps)(Thread);

const App = () => (
    <div className='ui segment'>
        <ThreadTabs/>
        <ThreadDisplay/>
    </div>
);

const WrappedApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default WrappedApp;
