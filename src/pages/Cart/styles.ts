import styled from "styled-components";

interface TextInputProps {
    size: number | 'full',
    flexSize?: number
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

export const OrderItems = styled.div`
    /* flex: 1;
    width: 30%; */
`

export const FormContainer = styled.div`
    background-color: ${props => props.theme['base-card']};
    padding: 40px 25px;
    /* flex: 1;
    width: 70%; */
`

export const ContainerHeader = styled.div`
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

export const OrderForm = styled.form`
   display: flex;
   flex-flow: row wrap;
   gap: 16px ;
   margin-top: 32px;
`

export const OrderFormRow = styled.form`
   display: flex;
   flex-flow: row wrap;
   gap: 0 10px;
   width: 100%;
   position: relative;
`

const BaseInput = styled.input`
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 4px;
    color: ${props => props.theme['base-text']};
    position: relative;
    
    &::placeholder {
        color: ${props => props.theme['base-label']}; 
    }

    &:focus {
        box-shadow: 0 0 0 1px ${props => props.theme['yellow-dark']}; 
    }
`

export const TextInput = styled(BaseInput) <TextInputProps>`
    max-width: ${props => props.size === 'full' ? `100%` : `${props.size}px`};
    width: 100%;
    ${props => props.flexSize && `
        flex: 1
    `};
`

export const OptionalField = styled.div<TextInputProps>`
    max-width: ${props => props.size === 'full' ? `100%` : `${props.size}px`};
    width: 100%;
    ${props => props.flexSize && `
        flex: 1
    `};
    position: relative;

    > input {
        padding-right: 60px;
    }
    
    span {
        position: absolute;
        right: 12px;
        top: 13px;
        font-size: .75rem;
        font-style: italic;
        color: ${props => props.theme['base-label']};
    }
`

