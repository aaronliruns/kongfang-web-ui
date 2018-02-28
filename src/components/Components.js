import React from 'react';



export const Tabs = (props) => (
        
        <div className="computer tablet only row">
            <div className="ui inverted menu navbar">
            <div className="brand item">PC Project Name</div>
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
        </div>
);

export const MobileTabs = (props) => (

    <div className="mobile only narrow row">
        <div className="ui inverted navbar menu">
            <div className="brand item">Mobile Project Name</div>
            <div className="right menu open">
                <div className="menu item">
                    <i class="align justify icon"></i>
                </div>
            </div>    
        </div>
        <div className="ui vertical navbar menu">
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

export const Thread = (props) => (
    <div className='ui center aligned basic segment'>
        <MessageList messages={props.thread.messages} onClick={props.onMessageClick}/>
        <TextFieldSubmit onSubmit={props.onMessageSubmit}/>
    </div>
);


