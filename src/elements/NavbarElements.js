import { Link } from 'gatsby';
import styled from 'styled-components';
import media from "styled-media-query";

export const NavList = styled.ul`
    ${media.lessThan('medium')`
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: ${({ click }) => (click ? '0' : '-2000px')};
        opacity: 1;
        transition: all 0.3s ease;
        z-index: 1;
    `}
`;
export const  NavListItem = styled.li`
    display: flex;
    height: 100%;
    position: relative;
    ${media.lessThan('medium')`
        height: 80px;
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
export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    font-size: 1.8rem;
    text-transform: capitalize;
    z-index: 1;
    ${media.lessThan('large')`
        /* font-size: 1.3rem; */
    `}
    ${media.lessThan('medium')`
        width: 100%;
        padding: 1rem 0;
        max-width: 350px;
        font-size: 2rem;
    `}
`;
export const MenuIcon = styled.div`
    display: none;
    ${media.lessThan('medium')`
        z-index: 999;
        display: block;
        position: absolute;
        /* top: 20px; */
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        color: ${({ theme }) => theme.color.orange};
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.color.hover};
        }
    `}
`;
export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: center;
    height: 16vh;
    gap: 10px;
    ${media.lessThan('large')`
        padding: 0;
    `}
    ${media.lessThan('medium')`
        justify-content: center;
    `}
`;