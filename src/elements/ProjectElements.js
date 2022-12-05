import { Link } from "gatsby";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";
import { ContainerFlexColumn, ContainerFlexRow, Flex } from "./LayoutElements";

export const ProjectDescription = styled.div`

`;
export const ProjectImageCover = styled(ContainerFlexColumn)`
    position: absolute;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.gray};
    text-transform: capitalize;
    opacity: 0.3;
    top: 0;
    height: 100%;
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
    /* ${media.greaterThan('medium')`
        width: 50%;
    `} */
`;
export const ProjectList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    justify-content: center;
    gap: 1em;
    ${media.greaterThan('small')`
        grid-template-columns: repeat(auto-fit, minmax(351px, 1fr));
        padding: 1em;
    `}
    ${media.greaterThan('medium')`
        /* gap: 2em; */
    `}
    ${media.greaterThan('large')`
        /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
        /* grid-template-columns: repeat(auto-fit, minmax(367px, 1fr)); */
    `}
`;
export const ProjectsListFilter = styled(ContainerFlexColumn)`
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
export const ProjectServices = styled(ContainerFlexRow)`
    justify-content: center;
    background-color: ${({ theme }) => theme.color.orange};
`;
export const ProjectWrapper = styled(Flex)`
    height: 100%;
    width: 100%;
    max-width: 617px;
    margin: auto;
    /* ${props => props.number && 'width: 100%; max-width: 617px; margin: auto;'} */
`;