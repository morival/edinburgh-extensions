import styled from "styled-components";
import media from "styled-media-query";


// export const 
export const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    text-align: start;
    /* background: ${({ theme }) => theme.color.dark_blue};
    color: ${({ theme }) => theme.color.white}; */
    padding-block: 20px;
    width: 50%;
    ${media.lessThan('large')`
        width: 100%;
    `}
`;
export const ContactEmail = styled.div`

`;
export const ContactLogo = styled.div`

`;
export const ContactTel = styled.div`
    
`;
export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    padding-block: 5px;
    gap: 10px;
    font-size: 1.15em;
    ${media.lessThan('small')`
        font-size: 1em;
    `}
`;