import styled from "styled-components";
import { defaultTheme } from '../../styles/themes/default';

interface HeadingProps {
    color: keyof typeof defaultTheme
}

export const CartContainer = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
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

export const OrderItems = styled.div`
    flex: 1;
    width: 100%;
`

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
    padding: 25px 25px;
    /* display: flex;
    flex-flow: column wrap;
    justify-content: space-between; */
`

export const OrderItem = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    padding: 1rem;

    img {
        max-width: 64px;
        margin-right: 16px;
    }

    .order-item {
        display: flex;
        align-items: center;
        gap: 5px;

        &__actions {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        &__infos {
            flex: 1;
        }
    }
`

export const OrderItemInfos = styled.div`
    color: ${({ theme }) => theme['base-subtitle']};
    display: flex;
    justify-content: space-between;

    span {
            display: block;
            color: ${({ theme }) => theme['base-subtitle']};
            margin-bottom: 5px;

            &.item-price {
               font-weight: bold;
            }
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

export const TotalCartInfo = styled.section`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: .5rem;
    
    > div {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        flex-flow: row wrap;
        width: 100%;

        & + div + div {
            > span {
                font-weight: bold;
                font-size: 1.125rem;
            }
        }
    }
`

export const ConfirmOrderBtn = styled.button`
    width: 100%;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['yellow']};
    display: flex;
    align-items: center;
    padding: 14px 8px;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    color: ${({ theme }) => theme['white']};
    font-size: 0.875rem;
    justify-content: center;
    flex: 1;
    margin-top: 1.5rem;
`