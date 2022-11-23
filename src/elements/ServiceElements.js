import styled from 'styled-components';
import media from 'styled-media-query';
import { ComponentInfo } from './ThemeElements';


export const ServiceDescription = styled.div`
    padding: 1em;
`;
export const ServiceDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em;
    width: 100%;
`;
export const ServiceImage = styled.div`
        width: 100%;
    ${media.greaterThan('large')`
        text-align: left;
        width: 50%;
    `}
`;
export const ServiceInfoContainer = styled(ComponentInfo)`
    ${media.greaterThan('large')`
        width: 50%;
        padding: clamp(20px, 2.6vw, 100px);
    `}
`;
export const ServiceTitle = styled.h3`
    text-transform: capitalize;
`;
export const ServiceTypesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const ServiceWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    background-color: ${({ theme }) => theme.color.transparent_dark_blue};
    ${media.greaterThan('medium')`
        /* flex-direction: row; */
    `}
    &:nth-of-type(2n) {
        background-color: ${({ theme }) => theme.color.transparent_orange};
        ${media.greaterThan('large')`
            flex-direction: row-reverse;
        `}
        .image {
            ${media.greaterThan('large')`
                text-align: right;
            `}
        }
    }
`;