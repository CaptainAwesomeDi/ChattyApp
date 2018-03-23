import React, { Component } from 'react';

export class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            user: props.currentUser
        }
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onKeyPressUsername = this.onKeyPressUsername.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
    }

    onChange(event) {
        this.setState({ content: event.target.value });
    }
    onChangeUsername(event) {
        this.setState({ user: event.target.value });

    }
    onKeyPressUsername(event) {
        if (event.key === 'Enter'){
            const changeMessage = `${this.props.currentUser} Changed name to ${event.target.value}`;
            this.props.addNewMessage('postNotification',null,changeMessage);
            this.props.updateNameFn(this.state.user);
        }
    }

    onKeyPress(event) {
        if ((event.key === 'Enter') && (this.state.content.replace(/\s/g, '').length > 0)){
            const actualUser = (!this.state.user.replace(/\s/g, '').length ? 'Bob':this.state.user);
            this.props.addNewMessage('postMessage',actualUser, this.state.content);
                this.setState({ content: ''});
        }
    }

    render() {
        const props = this.props;
        return (
            <footer className='chatbar'>
                <input className="chatbar-username" placeholder="Your Name (Optional)" onChange={this.onChangeUsername} value={this.state.user} onKeyPress = {this.onKeyPressUsername}/>
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.content} onChange={this.onChange} onKeyPress={this.onKeyPress} />
            </footer>
        );
    }
}