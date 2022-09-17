import { Link } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";


export const AddressDetails = styled.div`

`;
export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    ${media.lessThan('medium')`
    /* order: 1; */
    `}
`;
export const ContactDetails = styled.div`

`;
export const CopyRights = styled.div`
    padding: 0.6rem;
    text-align: center;
    background-color: #1d1d21;
`;
export const Follow = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;
export const FooterWrapper = styled.div`
    color: white;
    background-color: #3e3e49;
    /* background-color: #191970; */
`;
export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const MainFooter = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    ${media.lessThan('small')`
        flex-direction: column;
        align-items: center;
    `}
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;  
`;
export const SiteLink = styled(Link)`
    color: white;
`;
export const SiteMap = styled.div`
`;
export const SocialMediaList = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    svg {
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.color.social_icons}
    }
`;
export const Title = styled.div`
    text-transform: uppercase;
`;