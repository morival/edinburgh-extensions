import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";

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
    margin: 5px;
    ${media.lessThan('huge')`
        width: calc(50% - 10px);
    `}
    ${media.lessThan('medium')`
        margin: 10px 20px;
        width: 100%;
    `}
    ${media.lessThan('small')`
        margin: 5px 10px;
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
export const ServicesWrapper = styled.div`
    display: flex;
    justify-content: center;
    /* gap: 40px; */
    ${media.lessThan('huge')`
        flex-wrap: wrap;
    `}
`;
