import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";


export const AboutButton = styled(Button)`

`;
export const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    ${media.lessThan('medium')`
        width: 100%;
    `}
`;
export const AboutImage = styled.div`
    width: 50%;
    ${media.lessThan('medium')`
        width: 100%;
    `}
`;
export const AboutSection = styled.section`
    padding-inline: 40px;
    background-color: ${({ theme }) => theme.color.lightgray};
    ${media.lessThan('large')`
        padding-inline: 20px;
    `}
    ${media.lessThan('small')`
        
    `}
`;
export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 40px;
    ${media.lessThan('large')`
        gap: 20px;
    `}
    ${media.lessThan('medium')`
        flex-wrap: wrap;
        gap: 10px;
    `}
    ${media.lessThan('small')`
        flex-direction: column;
    `}
`;