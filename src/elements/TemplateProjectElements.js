import { Modal } from 'react-bootstrap';
import styled from "styled-components";


export const ModalBS = styled(Modal).attrs({
    backdropClassName: 'modal-backdrop-background',
    contentClassName: 'modal-content-border'
})`
    /* display: flex;
    align-items: center; */
`;
export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 55px;
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    /* z-index: 1100; */
`;
export const ArrowLeft = styled(Arrow)`
    left: 32px;
`;
export const ArrowRight = styled(Arrow)`
    right: 32px;
`;