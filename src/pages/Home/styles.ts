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
        flex-flow: column wrap;
`