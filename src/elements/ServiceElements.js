import styled from 'styled-components';
import media from 'styled-media-query';
import { ComponentInfo } from './ThemeElements';
import { TiTick } from 'react-icons/ti'


export const ServiceDescription = styled.p`
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
export const ServiceTickIcon = styled(TiTick)`
    color: green;
    font-size: 1.5em;
`;
export const ServiceTitle = styled.h2`
    text-transform: capitalize;
    font-weight: bold;
`;
export const ServiceType = styled.div`
    display: flex;
`;
export const ServiceTypesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0 2em;
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