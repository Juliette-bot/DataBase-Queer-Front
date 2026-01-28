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
            <Label htmlFor={nameId} className="text-xl md:text-2xl font-bold text-white mb-8 block text-center
                                             drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                {label}
            </Label>
            <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
                {types.map((type, index) => {
                    const colorSchemes = [
                        { bg: 'bg-indigo-500', border: 'border-indigo-500', glow: 'shadow-[0_0_20px_rgba(99,102,241,0.6)]', emoji: '📖' },
                        { bg: 'bg-cyan-500', border: 'border-cyan-500', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.6)]', emoji: '🎧' },
                        { bg: 'bg-blue-500', border: 'border-blue-500', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.6)]', emoji: '🎬' },
                        { bg: 'bg-violet-500', border: 'border-violet-500', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.6)]', emoji: '🎮' }
                    ];
                    
                    const scheme = colorSchemes[index % colorSchemes.length];
                    
                    return (
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
                            <div className={`
                                relative
                                flex flex-col items-center justify-center gap-4
                                p-8
                                border-4 border-white/20
                                rounded-pixel
                                bg-retro-dark
                                shadow-pixel
                                transition-all duration-200
                                peer-checked:${scheme.border}
                                peer-checked:${scheme.glow}
                                peer-checked:translate-x-1 peer-checked:translate-y-1
                                hover:border-white/40
                                hover:translate-x-0.5 hover:translate-y-0.5
                                active:translate-x-2 active:translate-y-2
                                active:shadow-none
                                min-h-[180px]
                            `}>
                                {/* Pixels décoratifs dans les coins */}
                                <div className={`absolute top-0 right-0 w-3 h-3 ${scheme.bg} 
                                               opacity-0 peer-checked:opacity-100 transition-opacity`}></div>
                                <div className={`absolute bottom-0 left-0 w-3 h-3 ${scheme.bg}
                                               opacity-0 peer-checked:opacity-100 transition-opacity`}></div>
                                
                                {/* Icône pixel style */}
                                <div className={`
                                    relative w-16 h-16
                                    ${scheme.bg}
                                    border-4 border-white/30
                                    flex items-center justify-center
                                    shadow-pixel
                                    transform transition-all duration-200
                                    group-hover:scale-110
                                    peer-checked:scale-125
                                    peer-checked:${scheme.glow}
                                `}>
                                    <span className="text-4xl filter drop-shadow-lg">
                                        {scheme.emoji}
                                    </span>
                                </div>
                                
                                <span className="
                                    relative text-lg font-bold uppercase
                                    text-white
                                    transition-all duration-200
                                    [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]
                                ">
                                    {type.label}
                                </span>
                                
                                {/* Barre indicatrice */}
                                <div className={`
                                    absolute bottom-3 left-1/2 -translate-x-1/2
                                    w-0 h-1
                                    ${scheme.bg}
                                    peer-checked:w-16
                                    transition-all duration-300
                                `}></div>
                            </div>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};