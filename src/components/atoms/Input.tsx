import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
    hasError = false,
    className = '',
    ...props 
}) => {
    return (
        <input 
            className={`
                w-full px-3 py-2 rounded-input border transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-action
                ${hasError ? 'border-danger focus:ring-danger' : 'border-surface-gray'}
                ${className}
            `}
            {...props}
        />
    );
};