import React, { Component, Fragment } from 'react';

export class Message extends Component {
    render() {
        const props = this.props;
        return (
            <Fragment>
                <div className='message'>
                    <span className='message-username'>{props.username}</span>
                    <span className='message-content'> {props.content}</span>
                </div>
                <div className='message system'>
                    Anonymous1 changed their name to nomnom.
                </div>
            </Fragment>
        );
    }
}