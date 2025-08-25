import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

// Reusable Input Component
const InputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false
}) => {
  return (
    <div className="mb-4 relative">
      <input
        type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full px-3 pt-5 pb-2 rounded-md bg-gray-50 
          focus:outline-none focus:ring-2 focus:ring-teal-500 
          ${error ? "border border-red-500 bg-red-100" : "border border-gray-300"}`}
      />

      <label
        className="absolute left-3 top-2 text-gray-500 text-xs transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-teal-600"
      >
        {label}
      </label>

      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>
      )}
    </div>
  );
};

export default InputField;