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

    .badge {

        &__item {
  
        }
    }

    img {
    }

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

    .price-actions {

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