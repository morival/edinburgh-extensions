import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../components/controls";
import { ContainerFlexRow, ContainerHalfLarge } from "./ThemeElements";


export const ContactContainer = styled(ContainerFlexRow)`
    align-items: center;
    padding-block: 5px;
    gap: 10px;
    font-size: 1em;
    ${media.greaterThan('small')`
        font-size: 1.15em;
    `}
`;
export const ContactFormForm = styled.form`
    max-width: 600px;
    width: 100%;
    ${media.greaterThan('small')`
        padding: 1em;
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
export const ContactWrapper = styled(ContainerHalfLarge)`
    align-items: center;
`;
export const SubmitButton = styled(Button)`
    width: 100%;
`;