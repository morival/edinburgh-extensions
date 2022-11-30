import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";


export const ContactFormForm = styled.form`
    max-width: 600px;
    width: 100%;
    ${media.greaterThan('small')`
        padding: 1em;
    `}
    ${media.greaterThan('large')`
        width: 50%;
    `}
`;
export const ContactFormInput = styled.input`
    font-size: 1.2em;
    padding: 5px;
    width: 100%;
`;
export const ContactFormRow = styled.div`
    margin: 10px;
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