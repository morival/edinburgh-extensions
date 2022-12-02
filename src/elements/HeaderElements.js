import styled from 'styled-components';
import media from "styled-media-query";

export const HeaderWrapper = styled.header`
    
`;

export const TopHeader = styled.div`
    display: none;
    ${media.greaterThan('medium')`
        display: flex;
        justify-content: flex-end;
        margin: 0;
        padding: 0 20px;
        height: 4vh;
        gap: 10px;
        /* list-style-type: none; */
        background-color: ${({ theme }) => theme.color.black};
    `}
`;
export const TopHeaderItem = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.white};
    svg {
        margin: 0 5px;
    }
`