import styled from "styled-components";

export const Container = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3rem .875rem;
    border-radius: 6px;
    background-color: ${({theme}) => theme['base-button']};
    flex: 1;
    cursor: pointer;
    border: 1px solid transparent;

    & > input {
        display: none;
    }

    & > span {
        text-transform: uppercase;
        font-size: 0.8rem;
    }

    & > svg {
        color: ${({theme}) => theme['purple']};
        margin-right: 8px;
    }

    &[data-state='true'] {
        background-color: ${({theme}) => theme['purple-light']};
        border-color: ${({theme}) => theme['purple']};
    }


`