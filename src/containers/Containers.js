import {mapDispatchToTabsProps, mapDispatchToThreadProps, mapStateToTabsProps, mapStateToThreadProps, mergeThreadProps} from 'redux/maps/Maps';
import {connect} from 'react-redux';
import {Tabs, Thread} from 'components/Components';


export const ThreadTabs = connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);
export const ThreadDisplay = connect(mapStateToThreadProps, mapDispatchToThreadProps, mergeThreadProps)(Thread);