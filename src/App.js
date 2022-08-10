import React from "react";
import { useRoutes } from "react-router";
import Chat from './Chat';

const App = () => {
  return useRoutes([
    {path: "/", element: <Chat />},
  ]);
};

export default App;