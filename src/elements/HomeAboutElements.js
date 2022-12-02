import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";
import { ContainerFlexRowWrap } from "./LayoutElements";


export const AboutButton = styled(Button)`

`;
export const AboutLogo = styled.div`
    width: 100%;
    ${media.greaterThan('medium')`
        width: 50%;
    `}
`;
export const AboutWrapper = styled(ContainerFlexRowWrap)`

`;