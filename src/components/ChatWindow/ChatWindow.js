import React from "react";
import store from "../../store";
import Header from "../../components/Header/Header";
import Chats from "../../components/Chats"; 

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats />
    </div>
  );
};

export default ChatWindow;
