// App.js
import React from 'react';
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login';
import Profile from './Components/Profile';

// Wrap your app with the context provider
const App = () => {
  return (
    <UserContextProvider>
      <h1 className='bg-black text-white p-10 text-3xl'>Hello World!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
