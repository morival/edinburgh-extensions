import styled from "styled-components";
import media from "styled-media-query";


// export const 
export const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    text-align: start;
    padding-block: 20px;
    width: 100%;
    ${media.greaterThan('large')`
        width: 50%;
    `}
`;
export const ContactEmail = styled.div`

`;
export const ContactTel = styled.div`
    
`;
export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    padding-block: 5px;
    gap: 10px;
    font-size: 1em;
    ${media.greaterThan('small')`
        font-size: 1.15em;
    `}
`;