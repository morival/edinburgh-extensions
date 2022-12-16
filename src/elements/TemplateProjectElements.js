import { Modal } from 'react-bootstrap';
import { RiFullscreenFill } from 'react-icons/ri';
import styled from "styled-components";


export const ModalBS = styled(Modal).attrs({
    backdropClassName: 'modal-backdrop-background',
    contentClassName: 'modal-content-border',
    dialogClassName: 'h-100'
})`
    --bs-modal-width: none;
    --bs-modal-margin: 0;
    --bs-modal-bg: none;
    display: flex;
`;
export const Arrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 55px;
    color: ${({ theme }) => theme.color.white};
    opacity: .5;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
`;
export const ArrowLeft = styled(Arrow)`
    left: 32px;
`;
export const ArrowRight = styled(Arrow)`
    right: 32px;
`;
export const FullScreen = styled(RiFullscreenFill)`
    font-size: 1.5em;
    opacity: .5;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
`;
export const FullScreenIcon = styled.div`
    background: transparent RiFullscreenFill center/1em auto no-repeat;
`;