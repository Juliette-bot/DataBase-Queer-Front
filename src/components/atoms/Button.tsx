import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'action' | 'neutral' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'action',
    className = '',
    children,
    ...props
}) => {
  const variants = {
    action: "bg-action hover:bg-action-hover text-white shadow-card hover:shadow-card-hover",
    neutral: "bg-surface-gray hover:bg-gray-300 text-content-primary shadow-card hover:shadow-card-hover",
    danger: "bg-danger hover:bg-red-600 text-white shadow-card hover:shadow-card-hover"
};
    return (
        <button
            className={`px-4 py-2 rounded-button font-medium transition-all duration-300 ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};