import type React from "react";


interface RadioProps {

    hasError?: boolean;

}

export const Radio: React.FC<RadioProps> = ({
    hasError = false,
}) => {
    return <input type="radio" aria-invalid={hasError} />;
}