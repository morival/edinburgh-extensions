import styled from "styled-components";
import media from "styled-media-query";
import { Section } from "./ThemeElements";

export const ProjectsSection = styled(Section)`
    padding-inline: 40px;
    padding-block: 40px;
    ${media.lessThan('large')`
        padding-inline: 20px;
    `}
    ${media.lessThan('small')`
        
    `}
`;
export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;