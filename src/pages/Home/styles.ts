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
    gap: 22px;

    .banner-image {
        
    }
`

export const BannerIntro = styled.div`
        display: flex;
        align-items: center;
        flex-flow: column wrap;
        gap: 14px;
        
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
`

