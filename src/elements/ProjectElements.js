import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";

export const FilterButton = styled(Button)`
    ${(props) => {
        switch (props.selected) {
            case true:
                return css`
                    background-color: ${({ theme }) => theme.color.gray};
                `;
            default:
                return css`
                    background-color: ${({ theme }) => theme.color.lightgray};
                `;
        }
    }}
`;
export const FilterProjects = styled.div`
    display: flex;
    justify-content: center;
    ${media.lessThan('medium')`
        flex-direction: column;
        padding-inline: 20px;
    `}
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
        
    `}
    ${media.lessThan('medium')`
        flex-direction: column;
    `}
`;