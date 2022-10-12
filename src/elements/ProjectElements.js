import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";

export const FilterButton = styled(Button)`
    background-color: ${props => props.selected};
`;
export const ProjectDescription = styled.div`

`;
export const ProjectImage = styled.div`
    width: 100%;
    min-width: 400px;
    ${media.lessThan('large')`
        min-width: 300px;
        display: flex;
        justify-content: center;
    `}
    ${media.lessThan('medium')`
        /* padding: 20px; */
    `}
`;
export const ProjectInfo = styled.div`

`;
export const ProjectLocation = styled.h5`

`;
export const ProjectServices = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;
export const ProjectTitle = styled.h3`

`;
export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.even};
    padding: 20px;
    gap: 40px;
    ${media.lessThan('large')`
        /* gap: 20px; */
    `}
    ${media.lessThan('medium')`
        flex-direction: column;
    `}
`;