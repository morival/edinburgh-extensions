import { Link } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";
import { FaInstagram } from 'react-icons/fa';


export const Contact = styled.div`
    display: flex;
    column-gap: 40px;
    padding-block: 30px;
    ${media.lessThan('large')`
        flex-direction: column;
        align-items: center;
    `}
    ${media.lessThan('medium')`
    `}
    ${media.lessThan('small')`
    `}
`;
export const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
export const MainFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 40px 1rem;
    ${media.greaterThan('small')`
        flex-direction: row;
    `}
`;
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px; 
`;
export const SiteLink = styled(Link)`
    color: ${({ theme }) => theme.color.orange};
`;
export const SiteMap = styled.div`
    margin: auto;
    min-width: 100px;
`;

export const Title = styled.div`
    text-transform: uppercase;
`;