import styled from "styled-components";

export const Box = styled.div`
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: .5rem;
`

export const QtyInput = styled.input`
    background-color: transparent;
    max-width: 28px;
    width: 100%;
    border: 0;
    text-align: center;
    color: ${props => props.theme['base-title']};

    &:focus {
        box-shadow: none;
    }
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