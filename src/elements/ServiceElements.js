import styled from 'styled-components';
import media from 'styled-media-query';


export const ServiceDescription = styled.div`

`;
export const ServiceImage = styled.div`
    width: 100%;
    ${media.greaterThan('medium')`
        width: 50%;
    `}
    ${media.greaterThan('large')`
        text-align: left;
    `}
`;
export const ServiceTitle = styled.h3`
    text-transform: capitalize;
`;
export const ServicesIntro = styled.section`
    
`;
export const ServicesList = styled.section`

`;
export const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.transparent_dark_blue};
    ${media.greaterThan('medium')`
        flex-direction: row;
    `}
    &:nth-of-type(2n) {
        background-color: ${({ theme }) => theme.color.transparent_orange};
        ${media.greaterThan('medium')`
            flex-direction: row-reverse;
        `}
        .image {
            ${media.greaterThan('large')`
                text-align: right;
            `}
        }
    }
`;