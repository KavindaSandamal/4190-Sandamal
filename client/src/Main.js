import React from 'react';
import App from './App';
import { UserProvider } from './UserContext';

function Main() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Main;
