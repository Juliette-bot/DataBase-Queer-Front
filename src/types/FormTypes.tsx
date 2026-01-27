export interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
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
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void; // 👈 Change ici aussi
    error?: string;
    required?: boolean;
    disabled?: boolean;
}

export interface SelectOption {
    value: string;
    label: string;
}

export interface RadioFieldListProps {
    label: string;
    nameId: string;
    types: RadioButtonValue[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioButtonValue {
    value: string;
    label: string;
}