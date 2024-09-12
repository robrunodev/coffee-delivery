import styled from "styled-components";
import { defaultTheme } from '../../../../styles/themes/default';

interface IconWrapperProps {
    color: keyof typeof defaultTheme
}

export const BenefitItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 45%;
    width: 100%;
    gap: 10px;
    
    p {
        font-size: .87rem;
    }
`

export const IconWrapper = styled.span<IconWrapperProps>`
    border-radius: 50%;
    background-color: ${props => props.theme[props.color]};
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme['white']};
    flex-shrink: 0;
`
