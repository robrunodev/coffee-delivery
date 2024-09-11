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
            color: ${(props) => props.theme['yellow-dark']}
        }
    }

`