import React, { Component,Fragment} from 'react';
import { NavBar } from './NavBar.jsx';
import { ChatBar } from './ChatBar.jsx';
import { MessageList } from './MessageList.jsx';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: 'Bob' }, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
      ]
    }
    this.id = 0;
    this.addNewMessage = this.addNewMessage.bind(this);
  }

  // componentDidMount(){
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     // Add a new message to the list of messages in the data store
  //     const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
  //     const messages = this.state.messages.concat(newMessage)
  //     // Update the state of the app component.
  //     // Calling setState will trigger a call to render() in App and all child components.
  //     this.setState({ messages: messages })
  //   }, 3000);
  // }

  addNewMessage(id,name,content){
    console.log('add new name',id,name,content);
    const newMessage = { id: this.id++, username: name, content: content };
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages:messages});
  }

  render() {
    const currentUser = this.state.currentUser.name;
    const messages = this.state.messages;
    return (
      <Fragment>
        <NavBar />
        <MessageList messages={messages}/>
        <ChatBar currentUser={currentUser} addNewMessage={this.addNewMessage}/>
      </Fragment>
    );
  }
}
export default App;
