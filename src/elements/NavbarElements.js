import { Link } from 'gatsby';
import styled from 'styled-components';
import media from "styled-media-query";

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 200px;
    ${media.lessThan('large')`
        padding: 0;
    `}
    ${media.lessThan('medium')`
        justify-content: center;
    `}
`;
export const NavList = styled.ul`
    ${media.lessThan('medium')`
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: ${({ click }) => (click ? '0' : '-2000px')};
        opacity: 1;
        transition: all 0.2s ease;
        z-index: 1;
    `}
`;
export const  NavListItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
    ${media.lessThan('medium')`
        width: 100%;
        justify-content: center;
    `}
`;
export const NavLogo = styled(Link)`
    z-index: 999;
    flex-shrink: 2030;
    align-self: center;
`;
export const NavLink = styled(Link)`
    padding: 1rem;
    font-size: 2rem;
    text-transform: capitalize;
    ${media.lessThan('large')`
        font-size: 1.3rem;
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