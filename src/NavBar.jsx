import React, { Component } from 'react';

export class NavBar extends Component {
    render(){
        return (<nav className='navbar'>
        <a href='/' className='navbar-brand'>Chatty App</a>
        <p>Online: {this.props.usersonline}</p>
        </nav>);
      }
}
