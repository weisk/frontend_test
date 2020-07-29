import React, {useContext} from 'react';
import l from 'lodash';
import ChatWindow from 'components/ChatWindow';
import { ChatContext } from 'context/chats.context';

export default function Main() {
  window._ = l;
  const [state, dispatch] = useContext(ChatContext);
  const { chatList, selectedChat } = state;
  const showChat = typeof selectedChat === 'number' && chatList[selectedChat];
  const user = showChat ? chatList[selectedChat].user : null;

  return (
    <main className="main column">
      <div className="level px-4 py-4 chat-header">

        <div className="level-left">
          { showChat ? (
            <div className="level-item chat-header">
              <figure className="image is-64x64">
                <img className="is-rounded" src={user.avatar} width="64" height="64" alt="avatar" />
              </figure>

              <div className="chat-with">Chat with <strong>{user.name}</strong></div>
            </div>
          ) : (
            <div className="level-item">
              <div className="title">Select a chat on the left</div>
            </div>
          ) }
        </div>


        { showChat ? (
        <div className="level-right">
          <div className="level-item rating">
            Please rate this professional:
            <div className="stars">
              <span className="bad"><i className="fa fa-lg fa-frown"></i></span>
              <span className="good"><i className="fa fa-lg fa-smile-beam"></i></span>
            </div>
          </div>
        </div>
        ) : null }
      </div>

      <div className="chat-container">
        { showChat ? (
          <ChatWindow chatData={chatList[selectedChat]} />
        ) : null }
      </div>

      <div className="content mt-5">
        <div className="control has-icons-right">
          <input className="input is-large" type="text" placeholder="Type your message..."/>
          <span className="icon is-medium is-right">
            <i className="fas fa-paper-plane"></i>
          </span>
        </div>
      </div>

    </main>
  );
}