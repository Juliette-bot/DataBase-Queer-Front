import type React from "react";
import type { SelectOption } from "../../types/FormTypes";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    hasError?: boolean;
    options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({ 
    hasError = false,
    className = '',
    options,
    ...props 
}) => {
    return (
        <select
            className={`
                w-full px-3 py-2 rounded-input border transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-action
                ${hasError ? 'border-danger focus:ring-danger' : 'border-surface-gray'}
                ${className}
            `}
            {...props}
        >
            <option value="">Sélectionner...</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};