import { forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react'
import { Container } from './styles'

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
    isSelected: boolean,
    icon: ReactNode,
    text: string
}

export const Radio = forwardRef(function Radio(
    { isSelected, icon, text, ...rest }: RadioProps,
    ref: LegacyRef<HTMLInputElement>
) {
    return (
        <Container data-state={isSelected}>
            <input type="radio" ref={ref} {...rest} />
            {icon}
            <span>{text}</span>
        </Container>
    )
})