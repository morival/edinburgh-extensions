import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";
import { ContainerFlexColumn, ContainerFlexRowWrap } from "./LayoutElements";

export const ServiceButton = styled(Button)`
    
`;
export const ServiceImageCover = styled(ContainerFlexColumn)`
    position: absolute;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
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
        margin: 15px 30px;
    `}
    ${media.greaterThan('medium')`
        margin: 5px;
        width: calc(50% - 10px);
    `}
    ${media.greaterThan('large')`
        margin: 15px;
        width: calc(50% - 30px);
    `}
    &:nth-of-type(2n+1) > a > div {
        background-color: ${({ theme }) => theme.color.dark_blue};
    }
    &:nth-of-type(2n) > a > div {
        background-color: ${({ theme }) => theme.color.orange};
    }
    ${media.between('medium', 'huge')`
        &:nth-child(3) > a > div {
            background-color: ${({ theme }) => theme.color.orange};
        }
        &:nth-child(4) > a > div {
            background-color: ${({ theme }) => theme.color.dark_blue};
        }
    `}
`;
export const ServicesWrapper = styled(ContainerFlexRowWrap)`
    ${media.greaterThan('huge')`
        flex-wrap: nowrap;
    `}
`;
