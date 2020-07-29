import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SidebarRight from 'components/SidebarRight';
import Main from 'components/Main';

import { ChatContextProvider } from 'context/chats.context';

export default function Layout() {
  return (
    <>
      <Header />

      <section className="section">
        <div className="columns">
          <ChatContextProvider>
            <Sidebar />

            <Main />
          </ChatContextProvider>

          <SidebarRight />

        </div>
      </section>
    </>
  );
}