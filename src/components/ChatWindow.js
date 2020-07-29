import React, { useMemo } from 'react';
import clsx from 'clsx';
import { humanizeTime } from 'helpers';

function MessageList(props) {
  const {
    messages
  } = props;
}

export default function ChatWindow(props) {
  const {
    chatData
  } = props;

  console.log(chatData);

  const messages = useMemo(
    () => (
      chatData.messages.map((m) => {
        const patId = m.patient.user_id;
        const patName = m.patient.name;
        const proId = m.professional.user_id;
        const proName = m.professional.name;
        const senderName = (m.sender_id === proId) ? proName : (m.sender_id === patId ? patName : null );
        return {
          ...m,
          isPatient: m.sender_id === patId,
          isDoctor: m.sender_id === proId,
          sender: senderName,
        }
      })
    ),
    [ chatData.messages ]
  );

  return (
    <div className="chat-message-list px-4 py-4">
    {messages.map((m, i) => {
      return (
        <div
          key={`message-${i}`}
          className={clsx('chat-message', {patient: m.isPatient, doctor: m.isDoctor })}>
          <div className='chat-message-author'><strong>{m.sender}</strong></div>
          <span>{m.message}</span>
          <span className="light">{humanizeTime(m.sent_at)}</span>
        </div>
      );
    })}
    </div>
  );
}