import React, { useMemo } from 'react';

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
    () => chatData.messages.map((m) => {
      return {
        ...m,
        isPatient: m.sender_id === m.patient.user_id,
        isDoctor: m.sender_id === m.professional.user_id,

      }
    }),
    [ chatData.messages ]
  );

  return (
    <div className="message-list px-4 py-4">
      <ul>
        {chatData.messages.map((m, i) => <li key={`message-${i}`}>{m.message}</li>
        )}
      </ul>
    </div>
  );
}