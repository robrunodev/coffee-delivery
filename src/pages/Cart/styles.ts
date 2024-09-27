import styled from "styled-components";

interface TextInputProps {
    size: number | 'full'
}

export const CartContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
`

export const Title = styled.p`
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.125rem;
`

export const OrderDetails = styled.div``

export const OrderItems = styled.div``

export const FormContainer = styled.div`
    background-color: ${props => props.theme['base-card']};
    padding: 40px 25px;
`

export const AddressHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: .875rem;
    color: ${props => props.theme['base-subtitle']};

    p {
        margin-bottom: 5px;
    }

    span {
        font-size: .875rem;
        color: ${props => props.theme['base-text']};
    }

    svg {
        color: ${props => props.theme['yellow-dark']};
    }
`

export const PaymentContainer = styled.div`
    background-color: ${props => props.theme['base-card']};
`

const BaseInput = styled.input`
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 4px;
    color: ${props => props.theme['base-text']};
    
    &::placeholder {
        color: ${props => props.theme['base-label']}; 
    }

    &:focus {
        box-shadow: 0 0 0 1px ${props => props.theme['yellow-dark']}; 
    }
`

export const TextInput = styled(BaseInput)<TextInputProps>`
    max-width: ${props => props.size}px;
`