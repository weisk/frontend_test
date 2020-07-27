import React from 'react';

import { formatDate } from 'helpers';

export default function ChatListItem(props) {
  const {
    chat,
    selected = false,
    onClick
  } = props;

  const { avatar, name } = chat.user;
  const lastMessage = chat.messages[0];

  return (
    <div className="chat-list-item" onClick={onClick}>
      <img src={avatar} />

      <div className="chat-list-item-text">
        <span className="title">{name}</span>
        <span className="subtitle">{lastMessage.message}</span>
      </div>

      <div className="chat-list-item-date">
        { formatDate(lastMessage.sent_at) }
      </div>
    </div>
  );
}