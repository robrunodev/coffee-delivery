import styled from "styled-components";


export const Card = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 6px 36px;
    max-width: 256px;
    width: 100%;
    background-color: ${(props) => props.theme['base-card']};
    padding: 1.25rem;

    > p {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-title']};
    }

    > span {
        display: block;
        text-align: center;
        color: ${(props) => props.theme['base-label']};
        font-size: 0.875rem;
    }
`

export const CoffeeImg = styled.img`
    margin-top: -2.1rem;
`

export const Badges = styled.div`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 4px;
        
        span {
            border-radius: 100px;
            background-color: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            text-transform: uppercase;
            font-weight: bold;
            font-size: 0.625rem;
            padding: 4px 8px;
        }
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
    width: 100%;
    gap: 10px;
`

export const CardActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const AddToCartBtn = styled.button`
    background-color: ${(props) => props.theme['purple-dark']};
    padding: .5rem;
    border-radius: 6px;
    border: 0;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:focus {
        box-shadow: none;
    }
`

export const Price = styled.div`
    display: flex;
    color: ${(props) => props.theme['base-text']};
    font-size: .875rem;
    gap: 3.5px;

    > p {
        font-size: 1.5rem;
        line-height: 1rem;
    }
`