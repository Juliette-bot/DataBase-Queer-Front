export interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    required?: boolean;
    isTextarea?: boolean; 
    rows?: number; 
}
export interface SelectFieldProps {
    label: string;
    name: string;
    options: SelectOption[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
    required?: boolean;
}

export interface SelectOption {
    value: string;
    label: string;
}
