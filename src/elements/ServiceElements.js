import styled from 'styled-components';
import media from 'styled-media-query';


export const ServiceDescription = styled.div`

`;
export const ServiceImage = styled.div`
    width: 50%;
    ${media.lessThan('medium')`
        width: 100%;
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
    /* apply to every second Service Section */
    &:nth-of-type(2n) {
        flex-direction: row-reverse;
        background-color: ${({ theme }) => theme.color.transparent_orange};
        ${media.lessThan('medium')`
            flex-direction: column;
        `}
    }
    &:nth-of-type(2n+1) {
        background-color: ${({ theme }) => theme.color.transparent_dark_blue};
    }
    justify-content: center;
    /* gap: 40px; */
    ${media.lessThan('large')`
        /* gap: 20px; */
    `}
    ${media.lessThan('medium')`
        flex-direction: column;
    `}
`;