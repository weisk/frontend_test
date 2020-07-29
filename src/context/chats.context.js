import React, { useReducer, createContext } from "react";
import { sortChatsByDate } from 'helpers';

import listJson from 'assets/list.json';

export const ChatContext = createContext();

const initialState = {
  chatList: sortChatsByDate(listJson.data),
  selectedChat: null,
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CHAT":
      return {
        ...state,
        chatList: state.chatList.filter(chat => chat.id !== action.payload)
      };
    case "SELECT_CHAT":
      return {
        ...state,
        selectedChat: action.payload === state.selectedChat ? undefined : action.payload
      };
    default:
      throw new Error();
  }
};

export const ChatContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChatContext.Provider value={[state, dispatch]}>
      {props.children}
    </ChatContext.Provider>
  )
}
