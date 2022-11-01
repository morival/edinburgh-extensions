import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";


export const ContactFormInput = styled.input`
    width: 100%;
    ${media.lessThan('medium')`

    `}
`;
export const ContactFormRow = styled.div`
    ${media.lessThan('medium')`
        
    `}
`;
export const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-block: 20px;
    width: 100%;
    ${media.greaterThan('medium')`
        width: 50%;
    `}
`;
export const ContactFormTextArea = styled.textarea`
    width: 100%;
`;
export const SubmitButton = styled(Button)`
    width: 100%;
`;