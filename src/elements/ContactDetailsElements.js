import styled from "styled-components";
import media from "styled-media-query";


export const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-block: 20px;
    width: 50%;
    ${media.lessThan('medium')`
        width: 100%;
    `}
`;