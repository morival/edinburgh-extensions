import { Link } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";

export const FooterWrapper = styled.div`
    padding: 1rem;
    color: white;
    background-color: #191970;
` 
export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
`;
export const Contact = styled.div`
    ${media.lessThan('medium')`
        order: 1;
    `}
`;
export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContactDetails = styled.div`

`;
export const SocialMedia = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    svg {
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.color.social_icons}
    }
`;
export const SiteMap = styled.div`

`;
export const SiteLink = styled(Link)`
    color: white;
`;
export const CopyRights = styled.div`
    text-align: center;
`;