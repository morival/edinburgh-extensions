import { Link } from 'gatsby';
import styled from 'styled-components';
import media from "styled-media-query";


export const MenuIcon = styled.div`
        z-index: 999;
        position: absolute;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2em;
        color: ${({ theme }) => theme.color.orange};
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.color.hover};
        }
        ${media.greaterThan('medium')`
            display: none;
        `}
`;
export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem 0;
    font-size: 2rem;
    text-transform: capitalize;
    width: 100%;
    z-index: 1;
    ${media.greaterThan('medium')`
        font-size: 1.5rem;
        padding: 1rem;
    `}
`;
export const NavList = styled.ul`
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: ${({ click }) => (click ? '0' : '-2000px')};
    transition: all 0.3s ease;
    z-index: 1;
    ${media.greaterThan('medium')`
        position: relative;
        top: auto;
        flex-direction: row;
        width: auto;
        height: auto;
    `}
`;
export const  NavListItem = styled.li`
    display: flex;
    height: 10vh;
    position: relative;
    ${media.greaterThan('medium')`
        height: 100%;
    `}
`;
export const NavListItemSpan = styled.span`
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
    ${media.greaterThan('medium')`
        li:hover & {
            border-bottom-width: 10px;
        }
    `}
`;
export const NavLogoContainer = styled.div`
    width: 16vh;
    z-index: 999;
`
export const NavLogo = styled(Link)`
    position: relative;
`;
export const NavLogoOnHover = styled.div`
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity .5s ease;
    :hover {
        opacity: 1;
    }
`;
export const NavbarSection = styled.nav`
    display: flex;
    justify-content: center;
    padding: 0;
    height: 16vh;
    gap: 10px;
`;