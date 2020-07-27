import React, { useState, useEffect } from 'react';

export default function MessageList(props) {
  const {
    chatData
  } = props;

  return (
    <div className="message-list">
      <div className="list-title">Chat with <strong>{chatData.user.name}</strong></div>
      <ul>
        {chatData.messages.map((m, i) => <li key={`message-${i}`}>{m.message}</li>
        )}
      </ul>
    </div>
  );
}