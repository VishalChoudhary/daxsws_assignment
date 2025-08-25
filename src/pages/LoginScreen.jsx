import React, { useState } from 'react';
import InputField from '../components/InputField';
import validators from '../utils/validators';

const LoginScreen = ({ onNavigateToSignup, onNavigateToHome, findUser, registeredUsers }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    const usernameError = validators.username(formData.username);
    if (usernameError) newErrors.username = usernameError;
    
    const passwordError = validators.password(formData.password, formData.username);
    if (passwordError) newErrors.password = passwordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Check if user exists
      const user = findUser(formData.username, formData.password);
      if (user) {
        setLoginError('');
        onNavigateToHome(formData.username);
      } else {
        setLoginError(
          "Invalid credentials! Please check your username and password. If you don't have an account, please sign up first."
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-teal-600 text-white text-center py-8">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-teal-100 mt-2">Sign in to continue</p>
        </div>
        
        <div className="p-8">
          <InputField
            label="USERNAME"
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            error={errors.username}
          />
          
          <InputField
            label="NEW PASSWORD"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            error={errors.password}
            showPasswordToggle
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />
          
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded transition-colors duration-200 mb-4"
          >
            LOGIN
          </button>
          
          {loginError && (
            <p className="text-red-600 text-center mb-4">{loginError}</p>
          )}

          <p className="text-center text-gray-600">
            Don't have Account?{' '}
            <button
              type="button"
              onClick={onNavigateToSignup}
              className="text-teal-600 hover:text-teal-700 font-semibold underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;