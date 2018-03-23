import React, { Component, Fragment } from 'react';
import { NavBar } from './NavBar.jsx';
import { ChatBar } from './ChatBar.jsx';
import { MessageList } from './MessageList.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Bob' }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      onlineNumber: null
    }
    this.addNewMessage = this.addNewMessage.bind(this);
    this.clientSocket = '';
    this.updateUsername = this.updateUsername.bind(this);
  }

  componentDidMount() {
    this.clientSocket = new WebSocket("ws://localhost:3001");
    this.clientSocket.onmessage = (event) => {
      const serverMessageObj = JSON.parse(event.data);

      //separate type of server message for different components
      if (serverMessageObj.type === 'userConnect') {
        this.setState({onlineNumber:serverMessageObj.onlineNumber});
      } else {
        this.setState({ messages: this.state.messages.concat([serverMessageObj]) });
      }
    }
  }

  updateUsername(name) {
    this.setState({ currentUser: { name } });
  }

  addNewMessage(type, name, content) {
    const newMessage = { type: type, username: name, content: content };
    this.clientSocket.send(JSON.stringify(newMessage));
  }

  render() {
    const currentUser = this.state.currentUser.name;
    const messages = this.state.messages;
    const online = this.state.onlineNumber;
    return (
      <Fragment>
      <NavBar usersonline = { online }/>
      <MessageList messages = { messages }/>
      <ChatBar currentUser = { currentUser } addNewMessage = { this.addNewMessage } updateNameFn = { this.updateUsername }/>
      </Fragment>
    );
  }
}
export default App;