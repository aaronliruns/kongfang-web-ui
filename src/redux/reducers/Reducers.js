import {combineReducers} from 'redux';
import uuid from 'uuid';

//1.States and dispatches are held by containers
//2.and pass down to child components through props
//3.maps bridge states and dispatches from containers to first-level components
//4.reducers create immutable new states based on the old states and action
//5.only top-level container connects to the store
//6.dispatch actions to reducers
   

const reducer = combineReducers({
    activeThreadId: activeThreadIdReducer, 
    threads: threadsReducer
});

function activeThreadIdReducer(state = '1-fca2', action) {
    if (action.type === 'OPEN_THREAD') {
        return action.id;
    } else {
        return state;
    }
}

function findThreadIndex(threads, action) {
    switch (action.type) {
    case 'ADD_MESSAGE':
    {
        return threads.findIndex((t) => t.id === action.threadId);
    }
    case 'DELETE_MESSAGE':
    {
        return threads.findIndex((t) => t.messages.find((m) => (m.id === action.id)));
    }
    }
}

//state.threads - array messageReducer returns new array of messages
function threadsReducer(state = [
    {
        id: '1-fca2',
        title: 'Add CNY Accounts',
        loc: '/addacctcny',
        messages: messagesReducer([], {})
    }, {
        id: '2-be91',
        title: 'Add PHP Accounts',
        loc: '/addacctphp',
        messages: messagesReducer([], {})
    }, {
        id: '3-da7z',
        title: 'Add USD Accounts',
        loc: '/addacctusd',
        messages: messagesReducer([], {})
    }
], action) {
    switch (action.type) {
    case 'ADD_MESSAGE':
    case 'DELETE_MESSAGE':
    {
        const threadIndex = findThreadIndex(state, action);

        const oldThread = state[threadIndex];
        const newThread = {
            ...oldThread,
            messages: messagesReducer(oldThread.messages, action)
        };

        return [
            ...state.slice(0, threadIndex),
            newThread,
            ...state.slice(threadIndex + 1, state.length)
        ];
    }
    default:
    {
        return state;
    }
    }
}

//array of messages
function messagesReducer(state = [], action) {
    switch (action.type) {
    case 'ADD_MESSAGE':
    {
        const newMessage = {
            text: action.text,
            timestamp: Date.now(),
            id: uuid.v4()
        };
        return state.concat(newMessage);
    }
    case 'DELETE_MESSAGE':
    {
        return state.filter(m => m.id !== action.id);
    }
    default:
    {
        return state;
    }
    }
}

export default reducer;