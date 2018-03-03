import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AuthRoute from 'components/AuthRoute';

const NavItems = (props) => (
    props
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
);

export const Tabs = (props) => (
        
        <div className="computer tablet only row">
            <div className="ui inverted menu navbar">
            <div className="brand item">PC Project Name</div>
            <NavItems tabs={props.tabs} onClick={props.onClick}/>
            </div>
        </div>
);

export const MobileTabs = (props) => (

    <div className="mobile only narrow row">
        <div className="ui inverted navbar menu">
            <div className="brand item">Mobile Project Name</div>
            <div className="right menu open">
                <div className="menu item">
                    <i className="align justify icon"></i>
                </div>
            </div>    
        </div>
        <div className="ui vertical navbar menu">
        <NavItems tabs={props.tabs} onClick={props.onClick}/>
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

export const ThreadContent  = (props) => (
    <div className='ui center aligned basic segment'>
        <AuthRouter {...props}/>
    </div>
);

const DummyComponentCNY = (Props) => (
    <h2 className="ui center aligned icon header">
       <i className="circular users icon"></i>
    Chinese Yuan
    </h2>
);

const DummyComponentPHP = (Props) => (
    <h2 className="ui center aligned icon header">
       <i className="circular users icon"></i>
    Philippines Peso
    </h2>
);

const DummyComponentUSD = (Props) => (
    <h2 className="ui center aligned icon header">
       <i className="circular users icon"></i>
    U.S. Dollar
    </h2>
);

const NoMatch = ({ location }) => (
    <div className='ui inverted red raised very padded text container segment'>
      <strong>Error!</strong> No route found matching:
      <div className='ui inverted black segment'>
        <code>{location.pathname}</code>
      </div>
    </div>
);

export const AuthRouter = (props) => (
    <Switch>
        <AuthRoute path='/addacctcny' component={DummyComponentCNY} />
        <AuthRoute path='/addacctphp' component={DummyComponentPHP} />
        <AuthRoute path='/addacctusd' component={DummyComponentUSD} />
        <Route component={DummyComponentCNY} />
  </Switch>
);




