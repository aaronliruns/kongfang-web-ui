import React from 'react';
import {mapDispatchToTabsProps, mapDispatchToThreadProps, mapStateToTabsProps, mapStateToThreadProps, mergeThreadProps} from 'redux/maps/Maps';
import {connect} from 'react-redux';



const Tabs = (props) => (
    <div className='ui top attached tabular menu'>
        {props
            .tabs
            .map((tab, index) => (
                <div
                    key={index}
                    className={tab.active
                    ? 'active item'
                    : 'item'}
                    onClick={() => props.onClick(tab.id)}>
                    {tab.title}
                </div>
            ))
}
    </div>
);

class TextFieldSubmit extends React.Component {
    state = {
        value: ''
    };

    onChange = (e) => {
        this.setState({value: e.target.value})
    };

    handleSubmit = () => {
        console.log("clicked on submit button.");
        this
            .props
            .onSubmit(this.state.value);
        this.setState({value: ''});
    };

    render() {
        return (
            <div className='ui input'>
                <input onChange={this.onChange} value={this.state.value} type='text'/>
                <button onClick={this.handleSubmit} className='ui primary button' type='submit'>
                    Submit
                </button>
            </div>
        )
    }
}

const MessageList = (props) => (
    <div className='ui comments'>
        {props
            .messages
            .map((m, index) => (
                <div className='comment' key={index} onClick={() => props.onClick(m.id)}>
                    <div className='text'>
                        {m.text}
                        <span className='metadata'>@{m.timestamp}</span>
                    </div>
                </div>
            ))
}
    </div>
);

const Thread = (props) => (
    <div className='ui center aligned basic segment'>
        <MessageList messages={props.thread.messages} onClick={props.onMessageClick}/>
        <TextFieldSubmit onSubmit={props.onMessageSubmit}/>
    </div>
);

export const ThreadTabs = connect(mapStateToTabsProps, mapDispatchToTabsProps)(Tabs);
export const ThreadDisplay = connect(mapStateToThreadProps, mapDispatchToThreadProps, mergeThreadProps)(Thread);
