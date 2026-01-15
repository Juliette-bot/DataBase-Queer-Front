export interface FormFieldProps {
    label: string;
    name: string;
    value: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
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
