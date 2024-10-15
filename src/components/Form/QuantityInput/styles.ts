import styled from "styled-components";

export const Box = styled.div`
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: .5rem;
    min-width: 4.5rem;
    justify-content: space-between;
`

export const ControlQtyBtn = styled.button`
    background-color: transparent;
    border: 0;
    color: ${props => props.theme['purple']};
    cursor: pointer;

    &:focus {
        box-shadow: none;
    }
`