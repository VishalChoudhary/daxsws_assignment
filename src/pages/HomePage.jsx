import React from 'react';

const HomePage = ({ onLogout, username, userDetails }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="bg-teal-600 text-white text-center py-8">
          <h1 className="text-4xl font-bold mb-2">Welcome to Home Page</h1>
          <p className="text-teal-100 text-lg">Hello, {userDetails?.name || username}!</p>
        </div>
        
        <div className="p-8 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Login Successful!
            </h2>
            <p className="text-gray-600 text-lg">
              You have successfully logged in to your account.
            </p>
          </div>
          
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mb-8">
            <h3 className="text-lg font-semibold text-teal-800 mb-4">
              Account Information
            </h3>
            <div className="text-left space-y-2">
              <p className="text-teal-700">
                <strong>Name:</strong> {userDetails?.name || 'Not available'}
              </p>
              <p className="text-teal-700">
                <strong>Username:</strong> {userDetails?.username || username}
              </p>
              <p className="text-teal-700">
                <strong>Email:</strong> {userDetails?.email || 'Not available'}
              </p>
              <p className="text-teal-700">
                <strong>Phone:</strong> {userDetails?.phone || 'Not available'}
              </p>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;