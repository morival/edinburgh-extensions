import styled from 'styled-components';
import media from "styled-media-query";

export const HeaderWrapper = styled.header`
    background-color: #000000;
`;

export const TopHeader = styled.div`
    margin: 0;
    padding: 0 20px;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    ${media.lessThan('medium')`
        display: none;
    `}
`;
export const TopHeaderItem = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
    font-size: 1rem;
    color: #ffffff;
    svg {
        margin: 0 5px;
    }
`