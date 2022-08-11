import React from "react";
import { useRoutes } from "react-router";
import Chat from './Chat';
import ChatMessageList from "./ChatMessageList";

const App = () => {
  return useRoutes([
    
    {
      element: <Chat />,
      children: [
          {path: '/', element: <Chat />},
          {path: '/room/:roomId', element: <ChatMessageList />}
      ]
  }
  ]);
};

export default App;