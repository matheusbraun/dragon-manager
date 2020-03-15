import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserProvider from './context/user';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
