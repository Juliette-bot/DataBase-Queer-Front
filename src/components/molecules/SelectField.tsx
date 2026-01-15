import type React from "react";
import { Select } from '../atoms/Select';
import { Label } from '../atoms/Label';
import { ErrorMessage } from '../atoms/ErrorMessage';
import type { SelectFieldProps } from "../../types/FormTypes";



export const SelectField: React.FC<SelectFieldProps> = ({ 
    label,
    name,
    options=[],
    error,
    required = false,
    value,
    onChange
}) => {
    return (
        <div className="mb-4">
            <Label htmlFor={name} required={required}>
                {label}
            </Label>
            <Select
                id={name}
                name={name}
                options={options}
                value={value}
                onChange={onChange}
                hasError={!!error}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
            />
            <ErrorMessage message={error} id={`${name}-error`} />
        </div>
    );
};