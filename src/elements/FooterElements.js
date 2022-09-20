import { Link } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";


export const AddressDetails = styled.div`

`;
export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
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
    row-gap: 8px;
    ${media.lessThan('medium')`
        grid-column: 2;
    `}
    ${media.lessThan('small')`
        grid-column: 1;
    `}
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
    ${media.lessThan('small')`
        display: none;
    `}
`;
export const MainFooter = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr 1fr 1fr;
    gap: 12px;
    /* display: flex;
    justify-content: space-around; */
    padding: 1rem;
    ${media.lessThan('medium')`
        grid-template-columns: 120px 3fr 2fr;
        /* padding: 0.5rem; */
    `}
    ${media.lessThan('small')`
        /* display: flex;
        flex-direction: column; */
        grid-template-columns: 1fr;
        padding: 1rem 2rem;
    `}
`;
export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;  
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
            /* background: #ffffff; */
        }
    }
`;
export const SocialMediaList = styled.div`
    /* display: inline-grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px; */
    display: flex;
    column-gap: 10px;
    
`;
export const Title = styled.div`
    text-transform: uppercase;
`;