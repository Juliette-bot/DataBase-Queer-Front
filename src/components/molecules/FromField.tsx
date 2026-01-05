import type React from "react";
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { ErrorMessage } from '../atoms/ErrorMessage';

interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    error?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({ 
    label,
    name,
    type = 'text',
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
            <Input
                id={name}
                name={name}
                type={type}
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