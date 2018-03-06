import {mapDispatchToTabsProps, mapDispatchToThreadProps, mapStateToTabsProps, mapStateToThreadProps, mergeThreadProps} from 'redux/maps/Maps';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Tabs, Thread, MobileTabs, ThreadContent} from 'components/Components';


export const ThreadTabs = withRouter(connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs));

export const MobileThreadTabs = withRouter(connect(mapStateToTabsProps, mapDispatchToTabsProps)(MobileTabs));

//export const ThreadDisplay = connect(mapStateToThreadProps, mapDispatchToThreadProps, mergeThreadProps)(Thread);

export const ThreadDisplay = withRouter(connect(mapStateToThreadProps, mapDispatchToThreadProps, mergeThreadProps)(ThreadContent));