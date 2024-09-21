import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`


export const HeaderNav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: .8rem;

    a {
        border-radius: 6px;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: .5rem;
        gap: .3rem;
        

        &:first-child {
            background-color: ${(props) => props.theme['purple-light']};
            color: ${(props) => props.theme['purple-dark']}
        }

        &:last-child {
            background-color: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            position: relative;

        }
    }
`

export const QuantityBadge = styled.span`
    color: white;
    font-weight: 600;
    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    position: absolute;
    width: 20px;
    height: 20px;
    padding: 2px 2px;
    top: -8px;
    right: -8px;
    text-align: center;
    font-size: 0.8rem;

`  