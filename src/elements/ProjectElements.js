import { Link } from "gatsby";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";

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
    max-width: 768px;
    transition: .5s ease;
    :hover {
        opacity: 0.8;
    }
`;
export const ProjectLink = styled(Link)`
    display: flex;
    justify-content: center;
    position: relative;
    width: 50%;
    ${media.lessThan('medium')`
        width: 100%;
    `}
`;
export const ProjectServices = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;
export const ProjectTitle = styled.h5`

`;
export const ProjectsIntro = styled.section`

`;
export const ProjectsList = styled.section`
    /* padding-block: 0; */
`;
export const ProjectsListFilter = styled.div`
    display: flex;
    justify-content: center;
    padding-block: 20px;
    ${media.lessThan('medium')`
        flex-direction: column;
        align-items: center;
    `}
`;
export const ProjectsListFilterButton = styled(Button)`
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
    ${media.lessThan('medium')`
        width: 180px;
    `}
`;
export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${media.greaterThan('medium')`
            flex-direction: row;
        `}
    &:nth-of-type(2n) {
        background-color: ${({ theme }) => theme.color.lightgray};
        ${media.greaterThan('medium')`
            flex-direction: row-reverse;
        `}
    }
    /* apply to every second ProjectWrapper */
    /* &:nth-of-type(2n) {
        flex-direction: row-reverse;
        background-color: ${({ theme }) => theme.color.lightgray};
        ${media.lessThan('medium')`
            flex-direction: column;
        `}
    }
    justify-content: center;
    ${media.lessThan('medium')`
        flex-direction: column;
    `} */
`;