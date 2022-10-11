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
    background-color: #1d1d21;
`;
export const Follow = styled.div`
    display: flex;
    justify-content: end;
    gap: 10px;
    padding: 20px;
`;
export const FooterWrapper = styled.div`
    color: white;
    background-color: #3e3e49;
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
        align-items: center;
    `}
`;
export const SiteLink = styled(Link)`
    color: white;
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