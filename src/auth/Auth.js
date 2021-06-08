import React, { useState, useEffect } from 'react';
import firebase from '../firebase/Firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h1>Loading User...</h1>
      </div>
    );
  }
  
  return (
    <AuthContext.Provider
      key={{
        currentUser,
      }}
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
