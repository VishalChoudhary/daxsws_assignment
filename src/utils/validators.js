// Validation functions
const validators = {
  name: (value) => {
    if (!value.trim()) return 'Name is required';
    if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should contain only alphabets';
    return '';
  },
  
  username: (value) => {
    if (!value.trim()) return 'Username is required';
    if (!/^[a-zA-Z0-9@#$%^&*()_+\-=\\[\]{};':"|,.<>/?]+$/.test(value)) {
      return 'Username should contain alphanumeric and special characters only';
    }
    return '';
  },
  
  email: (value) => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
  },
  
  phone: (value) => {
    if (!value.trim()) return 'Phone number is required';
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(value)) {
      return 'Phone number should include country code (e.g., +1234567890)';
    }
    return '';
  },
  
  password: (value, username = '') => {
    if (!value.trim()) return 'Password is required';
    if (!/^[a-zA-Z0-9@#$%^&*()_+\-=\\[\]{};':"|,.<>/?]+$/.test(value)) {
      return 'Password should contain alphanumeric and special characters only';
    }
    if (value === username) return 'Password should not be same as username';
    return '';
  },
  
  confirmPassword: (value, password) => {
    if (!value.trim()) return 'Please confirm your password';
    if (value !== password) return 'Passwords do not match';
    return '';
  }
};

export default validators;