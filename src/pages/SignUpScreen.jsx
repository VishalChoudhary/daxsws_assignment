import React, { useState } from 'react';
import InputField from '../components/InputField';
import validators from '../utils/validators';

// Sign Up Component
const SignUpScreen = ({ onNavigateToLogin, onRegisterUser, registeredUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    const nameError = validators.name(formData.name);
    if (nameError) newErrors.name = nameError;
    
    const usernameError = validators.username(formData.username);
    if (usernameError) newErrors.username = usernameError;
    
    // Check if username already exists
    const existingUser = registeredUsers.find(user => user.username === formData.username);
    if (existingUser) {
      newErrors.username = 'Username already exists. Please choose a different username.';
    }
    
    const emailError = validators.email(formData.email);
    if (emailError) newErrors.email = emailError;
    
    // Check if email already exists
    const existingEmail = registeredUsers.find(user => user.email === formData.email);
    if (existingEmail) {
      newErrors.email = 'Email already registered. Please use a different email.';
    }
    
    const phoneError = validators.phone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;
    
    const passwordError = validators.password(formData.password, formData.username);
    if (passwordError) newErrors.password = passwordError;
    
    const confirmPasswordError = validators.confirmPassword(formData.confirmPassword, formData.password);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newUser = {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      };

      onRegisterUser(newUser);

      setSuccessMessage(`Account created successfully for ${formData.name}. Redirecting to login...`);
      setTimeout(() => {
        setSuccessMessage('');
        onNavigateToLogin();
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="bg-teal-600 text-white text-center py-6">
          <h1 className="text-3xl font-bold">Create new Account</h1>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="NAME"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
            />
            
            <InputField
              label="USERNAME"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              error={errors.username}
            />
            
            <InputField
              label="EMAIL"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />
            
            <InputField
              label="PHONE NO"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
              placeholder="+1234567890"
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
            
            <InputField
              label="CONFIRM NEW PASSWORD"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              error={errors.confirmPassword}
              showPasswordToggle
              showPassword={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
          
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded transition-colors duration-200"
            >
              SIGN UP
            </button>
          </div>
            {successMessage && (
              <p className="text-green-600 text-center mt-4">{successMessage}</p>
            )}
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already a user?{" "}
                <button
                  type="button"
                  onClick={onNavigateToLogin}
                  className="text-teal-600 hover:underline font-semibold"
                >
                  Sign in
                </button>
              </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;