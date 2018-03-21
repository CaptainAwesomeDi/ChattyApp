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
        this.onUsernameChange = this.onUsernameChange.bind(this);
    }

    onChange(event) {
        this.setState({ content: event.target.value });
    }

    onUsernameChange(event) {
        console.log(event.target.value.length);
        this.setState({ user: event.target.value });
    }

    onKeyPress(event) {
        if (event.key === 'Enter') {
            const actualUser = (!this.state.user.length ? 'Bob':this.state.user);
            this.props.addNewMessage(1, actualUser, this.state.content);
                this.setState({ content: ''});
        }
    }

    render() {
        const props = this.props;
        return (
            <footer className='chatbar'>
                <input className="chatbar-username" placeholder="Your Name (Optional)" onChange={this.onUsernameChange} value={this.state.user} />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.content} onChange={this.onChange} onKeyPress={this.onKeyPress} />
            </footer>
        );
    }
}