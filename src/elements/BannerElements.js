import BackgroundImage from "gatsby-background-image";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";


export const BannerImage = styled(BackgroundImage)`
    background-attachment: fixed;
    width: 100%;
`;
export const BannerImageInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;
const bannerTextContainer = keyframes`
    33% { opacity: 0; visibility: hidden; }
    66% { filter: blur(12px) opacity(0); }
    100% { filter: blur(0) opacity(1); visibility: visible; }
`;
export const BannerTextContainer = styled.div`
    color: ${props => props.color || 'white'};
    visibility: hidden;
    font-size: 50px;
    animation: ${bannerTextContainer} 4s forwards;
    ${media.lessThan('medium')`
        font-size: 35px;
    `}
    ${media.lessThan('small')`
        font-size: 25px;
    `}
`;
const largeWrapperAnim = keyframes`
    0% { border: solid wheat; }
    100% { width: 560px; border: solid wheat; }
`;
const mediumWrapperAnim = keyframes`
    0% { border: solid wheat; }
    100% { width: 400px; border: solid wheat; }
`;
const smallWrapperAnim = keyframes`
    0% { border: solid wheat; }
    100% { width: 280px; border: solid wheat; }
`;
export const BannerTextWrapper = styled.div`
    width: 0;
    height: 150px;
    text-align: center;
    animation: ${largeWrapperAnim} 2s 1s forwards;
    ${media.lessThan('medium')`
        height: 105px;
        animation: ${mediumWrapperAnim} 2s 1s forwards;
    `}
    ${media.lessThan('small')`
        height: 75px;
        animation: ${smallWrapperAnim} 2s 1s forwards;
    `}
    background-color: ${({ theme }) => theme.color.dark_gray};
    opacity: 0.8;
`;