import React, { Component } from "react";
import "./Chats.css";
import { startEditMessage } from "../../actions";
import store from "../../store";

const Chat = ({ message,number }) => {
  const { text, is_user_msg } = message;
  const startEditing = (e) =>{
    store.dispatch(startEditMessage(e.target.dataset.number, text))
    console.log(e.target.dataset.number, ' number');
    console.log(text, ' text');
    // console.log('clicked1');
    // console.log(e.target);
    //Send out edit action
}

  return (
    <span onClick={startEditing} data-number={number} className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();

    }
    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
      };
      
    componentDidMount() {
        this.scrollToBottom();
      }
      componentDidUpdate() {
        this.scrollToBottom();
      }
    
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} number={message.number} key={message.number}/>
        ))}
      </div>
    );
  }
}

export default Chats;
