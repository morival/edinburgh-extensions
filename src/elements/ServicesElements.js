import styled from "styled-components";
import media from "styled-media-query";

export const ServicesSection = styled.section`
    margin: 20px;
    ${media.lessThan('small')`
        margin: 30px;
    `}
`;
export const ServicesWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    ${media.lessThan('large')`
        gap: 20px;
    `}
    ${media.lessThan('medium')`
        gap: 10px;
    `}
    ${media.lessThan('small')`
        flex-direction: column;
    `}
`;
