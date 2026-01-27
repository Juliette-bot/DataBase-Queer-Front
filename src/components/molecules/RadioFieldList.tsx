import type React from "react";
import { Label } from '../atoms/Label';
import type { RadioFieldListProps } from "../../types/FormTypes";

export const RadioFieldList: React.FC<RadioFieldListProps> = ({ 
    label,
    nameId,
    types = [],
    onChange,
}) => {
    return (
        <div className="mb-6">
            <Label htmlFor={nameId} className="text-lg font-semibold mb-4 block">
                {label}
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {types.map((type) => (
                    <label 
                        key={type.value}
                        htmlFor={`${nameId}-${type.value}`}
                        className="relative cursor-pointer group"
                    >
                        <input
                            type="radio"
                            id={`${nameId}-${type.value}`}
                            name={nameId}
                            value={type.value}
                            onChange={onChange}
                            className="peer sr-only"
                        />
                        <div className="
                            flex items-center justify-center
                            p-6 
                            border-2 border-surface-gray
                            rounded-card
                            bg-surface-light
                            shadow-card
                            transition-all duration-200
                            peer-checked:border-action 
                            peer-checked:bg-action/5
                            peer-checked:shadow-card-hover
                            hover:border-action/50
                            hover:shadow-card-hover
                            group-hover:scale-[1.02]
                        ">
                            <span className="
                                text-base font-medium 
                                text-content-secondary
                                peer-checked:text-action
                                peer-checked:font-semibold
                                transition-colors duration-200
                            ">
                                {type.label}
                            </span>
                            
                            {/* Indicateur visuel de sélection */}
                            <div className="
                                absolute top-3 right-3
                                w-5 h-5
                                rounded-full
                                border-2 border-surface-gray
                                bg-surface-light
                                peer-checked:border-action
                                peer-checked:bg-action
                                transition-all duration-200
                                flex items-center justify-center
                            ">
                                <div className="
                                    w-2 h-2 
                                    rounded-full 
                                    bg-white
                                    opacity-0
                                    peer-checked:opacity-100
                                    transition-opacity duration-200
                                " />
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};