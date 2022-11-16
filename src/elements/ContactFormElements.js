import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";


export const ContactFormForm = styled.form`
    max-width: 600px;
    width: 100%;
`;
export const ContactFormInput = styled.input`
    font-size: 1.2em;
    padding: 5px;
    width: 100%;
    ${media.lessThan('medium')`

    `}
`;
export const ContactFormRow = styled.div`
    margin: 10px;
    ${media.lessThan('medium')`
        
    `}
`;
export const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 20px;
    width: 50%;
    ${media.lessThan('large')`
        width: 100%;
    `}
`;
export const ContactFormTextArea = styled.textarea`
    font-size: 1.1em;
    padding: 5px;
    width: 100%;
    height: 150px;
    /* ::placeholder {
        color: red;
    } */
`;
export const SubmitButton = styled(Button)`
    width: 100%;
`;