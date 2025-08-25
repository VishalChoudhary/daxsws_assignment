import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

// Reusable Input Component
const InputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ position: 'relative' }}>
        <input
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder || label}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            backgroundColor: error ? '#fed7d7' : '#f7fafc',
            borderBottom: `2px solid ${error ? '#e53e3e' : '#319795'}`,
            border: 'none',
            borderRadius: '4px',
            outline: 'none',
            color: '#4a5568',
            fontSize: '1rem',
            transition: 'all 0.2s ease'
          }}
          onFocus={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.boxShadow = '0 0 0 2px rgba(49, 151, 149, 0.2)';
          }}
          onBlur={(e) => {
            e.target.style.backgroundColor = error ? '#fed7d7' : '#f7fafc';
            e.target.style.boxShadow = 'none';
          }}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            style={{
              position: 'absolute',
              right: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#718096',
              padding: '0',
              display: 'flex',
              alignItems: 'center'
            }}
            onMouseOver={(e) => e.target.style.color = '#4a5568'}
            onMouseOut={(e) => e.target.style.color = '#718096'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p style={{
          color: '#e53e3e',
          fontSize: '0.875rem',
          marginTop: '0.25rem',
          marginLeft: '0.25rem'
        }}>{error}</p>
      )}
    </div>
  );
};

export default InputField;