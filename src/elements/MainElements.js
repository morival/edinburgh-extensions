import styled from "styled-components";
import media from "styled-media-query";


export const ContainerWrapper = styled.div`
    ${media.greaterThan('medium')`
        width: 750px;
    `}
    ${media.greaterThan('large')`
        width: 1000px;
    `}
`;
export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;