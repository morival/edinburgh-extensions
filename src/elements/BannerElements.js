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
    height: ${props => props.page==='home' ? '80vh' : '30vh'};
`;
const bannerTextContainer = keyframes`
    33% { opacity: 0; visibility: hidden; }
    66% { filter: blur(12px) opacity(0); }
    100% { filter: blur(0) opacity(1); visibility: visible; }
`;
export const BannerTextContainer = styled.div`
    color: ${props => props.color || 'white'};
    visibility: hidden;
    font-size: 25px;
    animation: ${bannerTextContainer} 4s forwards;
    ${media.greaterThan('small')`
        font-size: 35px;
    `}
    ${media.greaterThan('medium')`
        font-size: 50px;    
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
    display: ${props => props.page==='home' ? 'block' : 'none'};
    text-align: center;
    width: 0;
    background-color: ${({ theme }) => theme.color.dark_gray};
    opacity: 0.8;
    height: 75px;
    animation: ${smallWrapperAnim} 2s 1s forwards;
    ${media.greaterThan('small')`
        height: 105px;
        animation: ${mediumWrapperAnim} 2s 1s forwards;
    `}
    ${media.greaterThan('medium')`
        height: 150px;
        animation: ${largeWrapperAnim} 2s 1s forwards;
    `}
`;