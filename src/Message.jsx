import React, { Component, Fragment } from 'react';

export class Message extends Component {

    constructor(props){
        super(props);
        this.handleMessage = this.handleMessage.bind(this);
    }

    handleMessage(){
        switch (this.props.type){
            case 'incomingMessage':
            return (<div className='message'>
                    <span className='message-username'>{this.props.username}</span>
                    <span className='message-content'> {this.props.content}</span>
                </div>);
            case 'incomingNotification':
            return(<div className='message system'>{this.props.content}</div>);

        }
    }

    render() {
        return (
            <Fragment>
                {this.handleMessage()}
            </Fragment>
        );
    }
}