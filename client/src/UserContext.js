import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    firstName: '', 
    lastName: '',
  });

  const updateUserInfo = (firstName, lastName) => {
    setUserInfo({ firstName, lastName });
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
