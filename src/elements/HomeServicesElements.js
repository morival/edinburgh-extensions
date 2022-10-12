import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";

export const ServiceButton = styled(Button)`
    
`;
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
export const ServicesDescription = styled.p`

`;
export const ServicesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 40px;
    padding-block: 40px;
    background-color: lightgray;
    ${media.lessThan('large')`
        padding-inline: 20px;
    `}
    ${media.lessThan('small')`
        
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
        gap: 40px;
        flex-direction: column;
    `}
    ${media.lessThan('small')`
        gap: 20px;
    `}
`;
