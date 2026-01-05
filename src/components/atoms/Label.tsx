import type React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ 
    required = false,
    children,
    className = '',
    ...props 
}) => {
    return (
        <label 
            className={`block text-sm font-medium text-content-primary mb-1 ${className}`}
            {...props}
        >
            {children}
            {required && <span className="text-danger ml-1">*</span>}
        </label>
    );
};