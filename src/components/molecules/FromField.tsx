import type React from 'react';
import type { FormFieldProps } from '../../types/FormTypes';


export const FormField: React.FC<FormFieldProps> = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    required = false,
    isTextarea = false,
    rows = 4,
}) => {
    const baseClasses = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500";
    const errorClasses = error ? "border-red-500" : "border-gray-300";

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={rows}
                    className={`${baseClasses} ${errorClasses} resize-y`}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`${baseClasses} ${errorClasses}`}
                />
            )}
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};