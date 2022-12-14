import { Modal } from 'react-bootstrap';
import styled from "styled-components";


export const ModalBS = styled(Modal).attrs({
    backdropClassName: 'modal-backdrop-background',
    contentClassName: 'modal-content-border'
})`
    /* display: flex;
    align-items: center; */
`;