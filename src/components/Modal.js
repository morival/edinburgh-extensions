import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ArrowLeft, ArrowRight, ModalBS } from '../elements';
// import { DialogContainer } from '../elements';


export const Modal = forwardRef((props, ref) => {

    const [modalIndex, setModalIndex] = useState(false)

    const handlePrevious = () => {
        const isFirstIndex = modalIndex === 0;
        const newIndex = isFirstIndex ? props.nodes.length - 1 : modalIndex - 1;
        setModalIndex(newIndex);
    }
    const handleNext = () => {
        const isLastIndex = modalIndex === props.nodes.length - 1;
        const newIndex = isLastIndex ? 0 : modalIndex + 1;
        setModalIndex(newIndex);
    }
    // console.log(modalIndex)
    const modalImage = props.nodes[modalIndex]

    useImperativeHandle(
        ref,
        () => ({
            setModal(i) {
                setModalIndex(i)
            }
        }),
    )

    // ///////////////////////////////////

    // const detectKeyDown = (e) => {
    //     if(e.key === "ArrowLeft") {
    //         // handlePrevious();
    //         console.log(modalIndex)
    //     }
    // }

    useEffect(() => {
        console.log(modalIndex)
        // document.addEventListener('keydown', function(e) {
        //     e.preventDefault()
        //     if(e.key === "ArrowLeft") {
        //         handlePrevious()
        //         // console.log(modalIndex)
        //     }
        //   }, true)
    }, [modalIndex])


 ////////////////////////////////////////////////////////

    // const handleTab = evt => {
    //     let total = focusableElements.length

    //     // If tab was pressed without shift
    //     if (!evt.shiftKey) {
    //         // If activeIndex + 1 larger than array length focus first element otherwise focus next element
    //         activeIndex + 1 === total ? activeIndex = 0 : activeIndex += 1

    //         focusableElements[activeIndex].focus()

    //         // Don't do anything I wouldn't do
    //         return evt.preventDefault()
    //     }

    //     // If tab was pressed with shift
    //     if (evt.shiftKey) {
    //         // if activeIndex - 1 less than 0 focus last element otherwise focus previous element
    //         activeIndex - 1 < 0 ? activeIndex = total - 1 : activeIndex -= 1

    //         focusableElements[activeIndex].focus()

    //         // Don't do anything I wouldn't do
    //         return evt.preventDefault()
    //     }
    // }
    // // map of keyboard listeners
    // const keyListenersMap = new Map([
    //     [9, handleTab],
    // ])

    // const handleKeydown = evt => {
    //     // get the listener corresponding to the pressed key
    //     const listener = keyListenersMap.get(evt.keyCode)

    //     // call the listener if it exists
    //     return listener && listener(evt)
    // }


    // useEffect(() => {
    //     if (ref.current) {
    //         // Select all focusable elements within ref
    //         focusableElements = ref.current.querySelectorAll('a, button, textarea, input, select')
    //     }
    // }, [ref])

    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeydown)

    //     return () => {
    //         // Detach listener when component unmounts
    //         document.removeEventListener('keydown', handleKeydown)
    //     }
    // }, [])


    return (
        <ModalBS
            {...props}
        >
            <ModalBS.Header
                style={{
                    // position: 'absolute', 
                    width: '100%',
                    borderBottom: '0',
                    color: 'white',
                    zIndex: '1'
                }}
                closeVariant='white'
                closeButton
            >
                <ModalBS.Title
                    style={{ width: '100%' }}
                    id="contained-modal-title-vcenter"
                >
                    {modalImage && modalImage.name}
                </ModalBS.Title>
                {/* <FullScreenIcon /> */}
                {/* <div>
                    <FullScreen />
                </div> */}
            </ModalBS.Header>
            <ModalBS.Body style={{ display: 'flex', justifyContent: 'center', padding: '0', maxHeight: '90vh', background: 'black' }} >
                {modalImage && <GatsbyImage
                    objectFit='contain'
                    // style={{ maxHeight: '100vh' }} 
                    image={getImage(modalImage)}
                    alt={modalImage.name} />}
                <ArrowLeft onClick={handlePrevious}>❮</ArrowLeft>
                <ArrowRight onClick={handleNext}>❯</ArrowRight>
            </ModalBS.Body>
        </ModalBS>
    )
})