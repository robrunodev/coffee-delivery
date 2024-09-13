import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-flow: column wrap;
`

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    padding: 4rem 0;
    gap: 15px;
`

export const Intro = styled.div`
        display: flex;
        align-items: center;
        flex-flow: column wrap;
        gap: 14px;
        max-width: 55%;
        width: 100%;
        
        > p {
            font-size: 3rem;
            line-height: 130%;
            color: ${props => props.theme['base-title']}
        }

        > span {
            font-size: 1.25rem;
            color: ${props => props.theme['base-subtitle']}
        }
`

export const IntroImg = styled.img`
    max-width: 45%;
    width: 100%;
`

export const BannerBenefits = styled.div`
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        row-gap: 10px;
        column-gap: 10px;
        margin-top: 2rem;
`

export const Container = styled.section`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
        
    .list-title {
        font-size: 2rem;
        color: ${props => props.theme['base-subtitle']}
    }
`

export const Products = styled.section`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    column-gap: 20px;
    row-gap: 35px;
`