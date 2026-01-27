import type React from "react";
// Faire l'atom radio
import { Label } from '../atoms/Label';
import type { RadioFieldListProps } from "../../types/FormTypes";

export const RadioFieldList: React.FC<RadioFieldListProps> = ({ 
    label,
    nameId,
    types=[],
    onChange,
}) => {
    return (
        <div className="mb-4">
            <Label htmlFor={nameId}>
                {label}
            </Label>

            {types.map((type) => (
                <div key={type.value} className="flex items-center mb-2">
                    <input
                        type="radio"
                        id={`${nameId}-${type.value}`}
                        name={nameId}
                        value={type.value}
                        onChange={onChange}
                        className="mr-2"
                    />
                </div>
            ))}
        </div>
    );
};