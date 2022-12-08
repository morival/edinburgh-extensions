import { Link } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";
import { FaInstagram } from 'react-icons/fa';
import { ContainerFlexColumn, ContainerHalfLarge, ContainerHalfLargeRow } from "./LayoutElements";


export const Contact = styled(ContainerHalfLargeRow)`
    flex-wrap: wrap;
    padding-block: 30px;
`;
export const CopyRights = styled.div`
    padding: 0.6rem;
    text-align: center;
    background-color: ${({ theme }) => theme.color.black};
`;
export const FooterInstagramIcon = styled(FaInstagram)`
    width: 30px;
    height: 30px;
    padding: 3px;
    color: ${({ theme }) => theme.color.gray};
    :hover {
        color: ${({ theme }) => theme.color.social_icons};
    }
`;
export const FooterWrapper = styled.footer`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.dark_gray};
`;
export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.between('small', 'medium')`
        justify-content: start;
    `}
`;
export const Menu = styled(ContainerHalfLarge)`
    justify-content: space-between;
    gap: 8px; 
`;
export const SiteLink = styled(Link)`
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.orange};
`;
export const SiteMapItems = styled(ContainerFlexColumn)`
    text-align: center;
    gap: 0.4em 1em;
    ${media.between('medium', 'large')`
        flex-direction: row;
    `}
`;
export const Title = styled.div`
    text-align: center;
    text-transform: uppercase;
`;