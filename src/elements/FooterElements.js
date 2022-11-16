import { Link } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";


export const Contact = styled.div`
    display: flex;
    column-gap: 40px;
    ${media.lessThan('large')`
        flex-direction: column;
        align-items: center;
    `}
    ${media.lessThan('medium')`
    `}
    ${media.lessThan('small')`
        padding-block: 30px;
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
export const Follow = styled.div`
    display: flex;
    align-items: end;
    padding: 10px;
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
    justify-content: space-evenly;
    padding: 40px 1rem;
    ${media.lessThan('small')`
        flex-direction: column;
        padding: 0;
    `}
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px; 
    padding: 10px;
    min-width: 100px;
    ${media.lessThan('small')`
        margin: auto;
    `}
`;
export const SiteLink = styled(Link)`
    color: ${({ theme }) => theme.color.orange};
`;
export const SiteMap = styled.div`

`;
export const SocialMediaLink = styled.a`
    svg {
        width: 30px;
        height: 30px;
        padding: 3px;
        color: ${({ theme }) => theme.color.social_icons};
    }
    svg {
        :hover {
            color: ${props => props.color};
        }
    }
`;

export const Title = styled.div`
    text-transform: uppercase;
`;