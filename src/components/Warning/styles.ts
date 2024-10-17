import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export type WarningTypes = {
    type: 'warning' | 'info' | 'error'
}

const color = {
    'warning': defaultTheme.yellow,
    'info': defaultTheme["purple-light"],
    'error': 'tomato'
}

export const Container = styled.p<WarningTypes>`
    border-radius: 6px;
    color: ${({ type }) => color[type]};
    font-size: .75rem;
    font-weight: 400;
    padding: 2px 5px;
    display: flex;
    align-items: center;
`