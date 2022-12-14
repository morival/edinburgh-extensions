import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ArrowLeft, ArrowRight, ModalBS } from '../elements';
// import { DialogContainer } from '../elements';


export const Modal = forwardRef((props, ref) => {

    const [modalIndex, setModalIndex] = useState(false)

    const handlePrevious = () => {
        const isFirstIndex = modalIndex === 0;
        const newIndex = isFirstIndex ? props.nodes.length -1 : modalIndex -1;
        setModalIndex(newIndex);
    }
    const handleNext = () => {
        const isLastIndex = modalIndex === props.nodes.length -1;
        const newIndex = isLastIndex ? 0 : modalIndex +1;
        setModalIndex(newIndex);
    }
    // console.log(props)
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
            <ModalBS.Body style={{ display: 'flex', justifyContent: 'center', padding: '0', background: 'black' }} >
                {modalImage && <GatsbyImage 
                    objectFit='contain'
                    // style={{ maxHeight: '100vh' }} 
                    image={getImage(modalImage)} 
                    alt={modalImage.name} />}
            </ModalBS.Body>
            <ArrowLeft onClick={handlePrevious}>❮</ArrowLeft>
            <ArrowRight onClick={handleNext}>❯</ArrowRight>
        </ModalBS>
    )
})