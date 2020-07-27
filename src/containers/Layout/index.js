import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';

import { ChatContextProvider } from 'context/chats.context';

export default function Layout() {
  return (
    <>
      <Header />

      <div className="section">
        <div className="columns">
          <ChatContextProvider>
            <Sidebar />

            <Main />

          </ChatContextProvider>

        </div>
      </div>
    </>
  );
}