import React, { useState } from 'react';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import HomePage from './pages/HomePage';


// Main App Component
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [loggedInUser, setLoggedInUser] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([
    // Default demo user
    {
      name: 'Admin User',
      username: 'admin123',
      email: 'admin@example.com',
      phone: '+1234567890',
      password: 'admin@123'
    }
  ]);

  const navigateToSignup = () => setCurrentScreen('signup');
  
  const navigateToLogin = () => {
    setCurrentScreen('login');
    setLoggedInUser('');
  };
  
  const navigateToHome = (username) => {
    setCurrentScreen('home');
    setLoggedInUser(username);
  };

  const registerUser = (userData) => {
    setRegisteredUsers(prev => [...prev, userData]);
  };

  const findUser = (username, password) => {
    return registeredUsers.find(user => 
      user.username === username && user.password === password
    );
  };

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen 
          onNavigateToSignup={navigateToSignup}
          onNavigateToHome={navigateToHome}
          findUser={findUser}
          registeredUsers={registeredUsers}
        />
      )}
      {currentScreen === 'signup' && (
        <SignUpScreen 
          onNavigateToLogin={navigateToLogin}
          onRegisterUser={registerUser}
          registeredUsers={registeredUsers}
        />
      )}
      {currentScreen === 'home' && (
        <HomePage 
          onLogout={navigateToLogin}
          username={loggedInUser}
          userDetails={registeredUsers.find(user => user.username === loggedInUser)}
        />
      )}
    </>
  );
};

export default App;