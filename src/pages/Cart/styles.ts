import styled from "styled-components";
import { defaultTheme } from '../../styles/themes/default';

interface HeadingProps {
    color: keyof typeof defaultTheme
}

export const CartContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
`

export const Title = styled.p`
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.125rem;
`

export const OrderDetails = styled.div`
    max-width: 640px;
    width: 100%;
`

export const OrderItems = styled.div``

const FormsContainer = styled.div`
    background-color: ${({ theme }) => theme['base-card']};
    border-radius: 6px;
    padding: 40px 25px;
`

export const ContainerHeading = styled.div<HeadingProps>`
    display: flex;
    flex-flow: row wrap;
    gap: .875rem;
    color: ${({ theme }) => theme['base-subtitle']};

    p {
        margin-bottom: 5px;
    }

    span {
        font-size: .875rem;
        color: ${({ theme }) => theme['base-text']};
    }

    svg {
        color: ${({ theme, color }) => theme[color]};
    }
`

export const AddressContainer = styled(FormsContainer)`
    margin-bottom: 1rem;
`

export const AddressForm = styled.section`
    display: grid;
    grid-template-areas:
        'cep . .'
        'street street street'
        'number fullAddress fullAddress'
        'neighborhood city state'
    ;
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;
    margin-top: 32px;
`

export const PaymentContainer = styled(FormsContainer)`
`

export const PaymentOptions = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;
`


export const OrderItemsContainer = styled.div`
    background-color: ${({ theme }) => theme['base-card']};
    border-radius: 6px 44px 6px 44px;
    padding: 40px 25px;
`

export const OrderItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .order-item__infos {
        
    }

    .order-item__actions {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

export const RemoveItemButton = styled.button`
    border-radius: 6px;
    background-color: ${({ theme }) => theme['base-button']};
    display: flex;
    align-items: center;
    padding: 8px;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;

    svg {
        margin-right: 4px;
        color: ${({ theme }) => theme['purple']};
    }
`