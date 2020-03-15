import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import UserProvider from './context/user';
import Routes from './routes';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
