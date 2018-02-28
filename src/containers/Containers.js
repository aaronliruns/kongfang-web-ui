import {mapDispatchToTabsProps, mapDispatchToThreadProps, mapStateToTabsProps, mapStateToThreadProps, mergeThreadProps} from 'redux/maps/Maps';
import {connect} from 'react-redux';
import {Tabs, Thread, MobileTabs} from 'components/Components';


export const ThreadTabs = connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);

export const MobileThreadTabs = connect(mapStateToTabsProps, mapDispatchToTabsProps)(MobileTabs);

export const ThreadDisplay = connect(mapStateToThreadProps, mapDispatchToThreadProps, mergeThreadProps)(Thread);