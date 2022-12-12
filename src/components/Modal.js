import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Modal as ModalBS } from 'react-bootstrap';
// import { DialogContainer } from '../elements';

export function Modal(props) {

    // console.log(props.show)
    const modalImage = props.nodes.find((node, i) => node.name === props.show)
    // console.log(modalImage)

    return (
        <ModalBS
            {...props} 
        >
            <ModalBS.Header 
                style={{ position: 'absolute', width: '100%', borderBottom: '0', color: 'white', zIndex: '1' }} 
                closeVariant='white' 
                closeButton
            >
                <ModalBS.Title id="contained-modal-title-vcenter">
                    {modalImage && modalImage.name}
                </ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body style={{ display: 'flex', padding: '0', background: 'black' }} >
                {modalImage && <GatsbyImage 
                    objectFit='contain'
                    style={{ maxHeight: '100vh' }} 
                    image={getImage(modalImage)} 
                    alt={modalImage.name} />}
            </ModalBS.Body>
        </ModalBS>
    )
};
