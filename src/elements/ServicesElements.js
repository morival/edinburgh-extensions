import styled from "styled-components";
import media from "styled-media-query";

export const ServiceContainer = styled.div`
    position: relative;
`;
export const ServiceImageCover = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: gray;
    text-transform: capitalize;
    opacity: 0.3;
    top: 0;
    height: 100%;
    width: 100%;
    transition: .5s ease;
    :hover {
        opacity: 0.8;
    }
`;
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
