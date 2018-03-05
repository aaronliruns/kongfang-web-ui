import {deleteMessage, addMessage, openThread, toggleNav} from 'redux/actions/Actions';


//props.onClick
export const mapDispatchToTabsProps = (dispatch) => ({
    onClick: (id) => (dispatch(openThread(id))),
    onToggle: ()=>(dispatch(toggleNav())),
    dispatch: dispatch
});

//Massage states and send down as props
export const mapStateToThreadProps = (state) => ({
    thread: state
        .threads
        .find(t => t.id === state.activeThreadId)
});

export const mapDispatchToThreadProps = (dispatch) => ({
    onMessageClick: (id) => (dispatch(deleteMessage(id))),
    dispatch: dispatch
});

export const mergeThreadProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    onMessageSubmit: (text) => (dispatchProps.dispatch(addMessage(text, stateProps.thread.id)))
});

//Massage states and send down as props
export const mapStateToTabsProps = (state) => {
    const tabs = state
        .threads
        .map(t => ({
            title: t.title,
            active: t.id === state.activeThreadId,
            id: t.id,
            loc:t.loc
        }));
    const navItemsVisible = state.mobileNavItemsVisible;

    return {tabs, navItemsVisible};
};