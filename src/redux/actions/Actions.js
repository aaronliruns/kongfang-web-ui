
export function deleteMessage(id) {
    return {type: 'DELETE_MESSAGE', id: id};
}

export function addMessage(text, threadId) {
    return {type: 'ADD_MESSAGE', text: text, threadId: threadId};
}

export function openThread(id) {
    return {type: 'OPEN_THREAD', id: id};
}

export function toggleNav() {
    return {type: 'TOGGLE_NAVITEMS'};
}
