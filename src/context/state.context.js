import React, { useReducer, createContext } from "react";



import listJson from 'assets/list.json';

export const ChatContext = createContext();

export const ChatContextProvider = (props) => {
  const [chats, setChats] = useState(initialState);

  return (
    <ChatContext.Provider value={[chats, setChats]}>
      {props.children}
    </ChatContext.Provider>
  )
}
