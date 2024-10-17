import { Container, WarningTypes } from "./styles";

interface WarningProps {
    text: string
    type: WarningTypes['type']
}


export const Warning = ({ text, type }: WarningProps) => {
    return (
        <Container type={type}>{text}</Container>
    )
}