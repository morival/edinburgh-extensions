import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";
import { ComponentInfo } from "./ThemeElements";

export const ServiceButton = styled(Button)`
    
`;
export const ServiceImageCover = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    /* background-color: ${({ theme }) => theme.color.dark_blue}; */
    text-transform: capitalize;
    font-size: xxx-large;
    opacity: 0.3;
    top: 0;
    height: 100%;
    width: 100%;
    transition: .5s ease;
    :hover {
        opacity: 0.8;
    }
`;
export const ServiceImageContainer = styled.div`
    position: relative;
    margin: 5px 0;
    width: 100%;
    ${media.greaterThan('small')`
        margin: 10px 20px;
    `}
    ${media.greaterThan('medium')`
        margin: 5px;
        width: calc(50% - 10px);
    `}
    &:nth-of-type(2n+1) > a > .cover {
        background-color: ${({ theme }) => theme.color.dark_blue};
    }
    &:nth-of-type(2n) > a > .cover {
        background-color: ${({ theme }) => theme.color.orange};
    }
    ${media.between('medium', 'huge')`
        &:nth-child(3) > a > .cover {
            background-color: ${({ theme }) => theme.color.orange};
        }
        &:nth-child(4) > a > .cover {
            background-color: ${({ theme }) => theme.color.dark_blue};
        }
    `}
`;
export const ServiceInfoContainer = styled(ComponentInfo)`
    ${media.greaterThan('medium')`
        width: 50%;
        padding: clamp(20px, 2.6vw, 100px);
    `}
`;
export const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${media.greaterThan('huge')`
        flex-wrap: nowrap;
    `}
`;
