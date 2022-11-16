import styled from "styled-components";
import media from "styled-media-query";


export const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: start;
    padding-block: 20px;
    width: 100%;
    ${media.greaterThan('medium')`
        width: 50%;
    `}
`;
export const ContactEmail = styled.div`

`;
export const ContactLogo = styled.div`
    width: 50%;
    ${media.lessThan('medium')`
        width: 100%;
    `}
`;
export const ContactTel = styled.div`
    
`;
export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 25px;
    gap: 10px;
    font-size: 1.15em;
`;