import React, { useState } from 'react';
import firebase from '../firebase/Firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location.reload();
      });
  };

  const resetInput = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className="loginContainer">
      <div className='inputBox'>
        <h1>Login or Sing Up</h1>
        <input 
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button 
          className="loginButton"
          onClick={register}
        >
          Sign Up
        </button>
        <button 
          className="loginButton"
          onClick={login}
        >
          Login
        </button>
        <button 
          className="loginButton"
          onClick={logOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Login;