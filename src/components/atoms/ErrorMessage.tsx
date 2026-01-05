import type React from "react";

interface ErrorMessageProps {
    message?: string;
    id?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
    message,
    id 
}) => {
    if (!message) return null;
    
    return (
        <span 
            id={id}
            className="text-danger text-sm mt-1 block"
            role="alert"
        >
            {message}
        </span>
    );
};