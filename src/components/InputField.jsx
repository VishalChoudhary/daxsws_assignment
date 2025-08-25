import React from 'react'

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
        <div className='mb-4'>
            <div className='relative'>
                <input 
                    type={showPasswordToggle ? (showPassword ? 'text' : 'password'): type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder || label}
                    className={`w-full px-4 py-3 bg-gray-100 border-b-2 ${
                    error ? 'border-red-500' : 'border-teal-500'
                    } focus:outline-none focus:bg-white transition-colors duration-200 text-gray-700`}
                />
                {showPasswordToggle && (
                    <button type='button' onClick={onTogglePassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
            </div>
            {error && (
            <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>
            )}
        </div>
    )
}

export default InputField;