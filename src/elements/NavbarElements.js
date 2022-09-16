import { Link } from 'gatsby';
import styled from 'styled-components';
import media from "styled-media-query";

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: gainsboro;
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
        background: mediumblue;
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
`;
export const NavLink = styled(Link)`
    padding: 1rem;
    font-size: 1.5rem;
    ${media.lessThan('medium')`
        width: 100%;
        padding: 1rem 0;
        max-width: 350px;
        font-size: 2rem;
        color: orange;
        &:hover {
            color: lightgoldenrodyellow;
            background-color: darkblue;
        }
    `}
`;
export const MenuIcon = styled.div`
    display: none;
    ${media.lessThan('medium')`
        z-index: 999;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        color: ${({ click }) => (click ? 'white' : 'black')};
        cursor: pointer;
    `}
`;