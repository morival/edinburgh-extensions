import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";
import { Section } from "./ThemeElements";

export const AboutButton = styled(Button)`

`;
export const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const AboutSection = styled(Section)`
    
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
        gap: 10px;
    `}
    ${media.lessThan('small')`
        flex-direction: column;
    `}
`;