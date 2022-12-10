import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Modal as ModalBS } from 'react-bootstrap';

export function Modal(props) {

    // console.log(props.show)
    const modalImage = props.nodes.find((node, i) => node.name === props.show)
    console.log(modalImage)

    return (
        <ModalBS {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
            <ModalBS.Header closeButton>
                <ModalBS.Title id="contained-modal-title-vcenter">
                    {modalImage && modalImage.name}
                </ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body style={{ maxHeight: '90vh' }}>
                {modalImage && <GatsbyImage image={getImage(modalImage)} alt={modalImage.name} />}
            </ModalBS.Body>
            <ModalBS.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
            </ModalBS.Footer>
        </ModalBS>
    )
};
