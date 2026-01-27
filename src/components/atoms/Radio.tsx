import type React from "react";


interface RadioProps extends React.FC<RadioProps> {

    hasErrr?: boolean;

}

export const Radio: React.FC<RadioProps> = ({
    hasError = false,
    
})