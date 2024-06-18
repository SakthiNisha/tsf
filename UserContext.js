import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [isProfileUpdated, setProfileUpdated] = useState(false);

  const login = (phone) => {
    setIsLoggedIn(true);
    setUserPhone(phone);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserPhone('');
    setUserName('');
    setUserAddress('');
  };

  const updateUserDetails = (name, address, phone) => {
    setUserName(name);
    setUserAddress(address);
    setUserPhone(phone);
    setProfileUpdated(true);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout, userPhone, userName, userAddress, isProfileUpdated, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
