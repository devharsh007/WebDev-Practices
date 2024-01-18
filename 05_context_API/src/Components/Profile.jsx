// Profile.js
import React, { useContext } from 'react';
import UserContext from '../Context/Usercontext';

// Consume the context using useContext hook
const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.Username}</div>;
};

export default Profile;
