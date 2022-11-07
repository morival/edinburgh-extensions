import { Link } from "gatsby";
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
export const ProjectImageCover = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.gray};
    text-transform: capitalize;
    opacity: 0.3;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: 500px;
    transition: .5s ease;
    :hover {
        opacity: 0.8;
    }
`;
export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 50px;
    width: 100%;
    ${media.between('medium', 'large')`
        padding-inline: 30px;
    `}
    ${media.lessThan('small')`
        padding-inline: 20px;
    `}
`;
export const ProjectLink = styled(Link)`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
`;
export const ProjectLocation = styled.h5`

`;
export const ProjectServices = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;
export const ProjectWrapper = styled.div`
    display: flex;
    /* apply to every second ProjectWrapper */
    &:nth-of-type(2n)  {
        flex-direction: row-reverse;
        ${media.lessThan('medium')`
            flex-direction: column;
        `}
    }
    justify-content: center;
    gap: 40px;
    background-color: ${({ theme }) => theme.color.lightgray};
    ${media.lessThan('large')`
        
    `}
    ${media.lessThan('medium')`
        flex-direction: column;
    `}
`;