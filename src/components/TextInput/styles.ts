import styled from "styled-components";

export const Box = styled.div`
   display: flex;
   flex-flow: row wrap;
   gap: 0 10px;
   width: 100%;
   position: relative;
`

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    
    input[type="text"] {
        background-color: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-button']};
        box-sizing: border-box;
        padding: 10px 15px;
        border-radius: 4px;
        width: 100%;
        color: ${props => props.theme['base-text']};
        
        &::placeholder {
            color: ${props => props.theme['base-label']}; 
        }

        &:focus {
            box-shadow: 0 0 0 1px ${props => props.theme['yellow-dark']}; 
        }
    }

    span {
        position: absolute;
        right: 12px;
        top: 13px;
        font-size: .75rem;
        font-style: italic;
        color: ${props => props.theme['base-label']};
    }

`;