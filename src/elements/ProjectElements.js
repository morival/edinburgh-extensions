import { Link } from "gatsby";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";

export const ProjectDescription = styled.div`

`;
export const ProjectImage = styled.div`
    width: 100%;
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
    transition: .5s ease;
    :hover {
        opacity: 0.8;
    }
`;
export const ProjectLink = styled(Link)`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    ${media.greaterThan('medium')`
        width: 50%;
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
    /* display: flex;
    justify-content: center;
    padding-block: 20px;
    ${media.lessThan('medium')`
        flex-direction: column;
        align-items: center;
    `} */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    ${media.greaterThan('medium')`
        flex-direction: row;
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
    width: 180px;
    ${media.greaterThan('medium')`
        width: 130px;
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
`;