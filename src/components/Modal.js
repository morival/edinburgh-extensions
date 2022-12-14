import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ModalBS } from '../elements';
// import { DialogContainer } from '../elements';


export const Modal = forwardRef((props, ref) => {

    const [modalIndex, setModalIndex] = useState(false)

    console.log(props)
    const modalImage = props.nodes[modalIndex]

    useImperativeHandle(
        ref,
        () => ({
            setModal(i) {
                setModalIndex(i)
                console.log(i)
            }
        }),
    )

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
                    // style={{ maxHeight: '100vh' }} 
                    image={getImage(modalImage)} 
                    alt={modalImage.name} />}
            </ModalBS.Body>
        </ModalBS>
    )
})