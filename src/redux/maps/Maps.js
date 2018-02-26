import {deleteMessage, addMessage, openThread} from 'redux/actions/Actions';



export const mapDispatchToTabsProps = (dispatch) => ({
    onClick: (id) => (dispatch(openThread(id)))
});

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

export const mapStateToTabsProps = (state) => {
    const tabs = state
        .threads
        .map(t => ({
            title: t.title,
            active: t.id === state.activeThreadId,
            id: t.id
        }));

    return {tabs};
};