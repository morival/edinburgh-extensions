import { Link } from "gatsby";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";
import { ContainerFlexColumn, ContainerFlexRow, Flex } from "./LayoutElements";


export const FilterList = styled.ul`
    list-style-type: none;
    justify-content: center;
    align-items: center;
    font-size: 0.75em;
    gap: 0.5em;
    /* padding: 1em; */
    /* height: 2em; */
    ${media.greaterThan('small')`
        font-size: 1.1em;
    `}
`;
export const FilterListButton = styled(Button)`
    border: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.orange};
    background-color: transparent;
    z-index: 1;
`;
export const FilterListItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 2em;
    /* ${(props) => {
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
    }} */
`;
export const FilterListItemSpan = styled.span`
    position: absolute;
    height: 100%;
    width: 100%;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.hover};
    border-top-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    bottom: 0;
    transition: .5s ease;
    li:hover & {
        border-bottom-width: 10px;
    }
`;
export const ProjectImageCover = styled(ContainerFlexColumn)`
    position: absolute;
    justify-content: end;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.gray};
    align-items: start;
    text-transform: capitalize;
    font-size: 2.2em;
    opacity: 0.3;
    top: 0;
    padding: 0.4em 0.8em;
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

export const ProjectServices = styled(ContainerFlexRow)`
    justify-content: center;
    /* background-color: ${({ theme }) => theme.color.orange}; */
`;
export const ProjectWrapper = styled(Flex)`
    height: 100%;
    width: 100%;
    max-width: 617px;
    margin: auto;
    /* ${props => props.number && 'width: 100%; max-width: 617px; margin: auto;'} */
`;