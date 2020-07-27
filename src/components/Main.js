import React, {useContext} from 'react';
import l from 'lodash';
import MessageList from 'components/MessageList';
import { ChatContext } from 'context/chats.context';

export default function Main() {
  window._ = l;
  const [state, dispatch] = useContext(ChatContext);
  const { chatList, selectedChat } = state;

  return (
    <main className="main column">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="title">Messages</div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            {/*<button type="button" className="button is-small">
              March 8, 2017 - April 6, 2017
            </button>*/}
          </div>
        </div>
      </div>

      <div style={{flex: 1}}>
        { (typeof selectedChat === 'number') ? (
          <MessageList chatData={chatList[selectedChat]} />
        ) : null }
      </div>

      <div className="content">
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