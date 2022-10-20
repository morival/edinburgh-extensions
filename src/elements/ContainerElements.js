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
    flex-wrap: wrap;
    padding-inline: 15px;
    ${media.greaterThan('medium')`
        width: 750px;
    `}
    ${media.greaterThan('large')`
        width: 1000px;
    `}
`;
export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    height: 100%;
    text-align: center;
`;