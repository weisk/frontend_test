import React, {useContext} from 'react';

import { ChatContext } from 'context/chats.context';
import ChatListItem from 'components/ChatListItem';


export default function Sidebar() {
  const [state, dispatch] = useContext(ChatContext);

  const selectChat = (idx) => {
    dispatch({
      type: 'SELECT_CHAT',
      payload: idx
    })
  };

  return (
    <aside className="sidebar column is-3">
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </p>
      </div>

      <div className="chat-list">
        {state.chatList.map((chat, i) => (
          <ChatListItem chat={chat} key={`chat-${i}`} selected={state.selectedChat === i} onClick={(evt) => selectChat(i)}/>
        ))}
      </div>
    </aside>
  );
}