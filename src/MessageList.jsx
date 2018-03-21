import React, { Component } from 'react';
import { Message } from './Message.jsx';

export class MessageList extends Component{

    render(){
        const props = this.props;
        const messages = props.messages.map(({id,username,content})=>
            (<Message key={id} username={username} content={content}/>));
        return (
            <main className='message'>
                {messages}
            </main>
        );
    }
}