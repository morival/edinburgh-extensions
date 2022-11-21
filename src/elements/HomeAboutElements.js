import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";


export const AboutButton = styled(Button)`

`;
export const AboutLogo = styled.div`
    width: 50%;
    ${media.lessThan('medium')`
        width: 100%;
    `}
`;
export const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    /* padding: 20px; */
    flex-wrap: wrap;
    ${media.greaterThan('large')`
        flex-wrap: nowrap;
    `}
`;