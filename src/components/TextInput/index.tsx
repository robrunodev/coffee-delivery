import { forwardRef, HTMLAttributes, InputHTMLAttributes, LegacyRef } from "react";
import { FieldError } from 'react-hook-form'
import { Box, InputContainer } from "./styles";


type TextInputProps = InputHTMLAttributes<HTMLDivElement> & {
    optional?: boolean
    containerProps?: HTMLAttributes<HTMLDivElement>
    error?: FieldError
};

export const TextInput = forwardRef(function TextInput(
    { optional, containerProps, error, ...props }: TextInputProps,
    ref: LegacyRef<HTMLInputElement>) {
    return (
        <Box {...containerProps}>

            <InputContainer>
                <input
                    type="text"
                    ref={ref}
                    {...props}
                />
                {optional && <span>opcional </span>}
            </InputContainer>

            {error?.message && <span>{error.message}</span>}
        </Box>
    )
})