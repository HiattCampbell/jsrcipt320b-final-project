import React, { useContext } from 'react';
import { AuthContext } from '../../auth/Auth';

const Welcome = () => {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : "";

  return (
    <div>
      <h2>{currentUserEmail}</h2>
    </div>
  )
}

export default Welcome;
