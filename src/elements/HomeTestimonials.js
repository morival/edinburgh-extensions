import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const TestimonialsSection = styled.section`
    background-color: lightgray;    
`;
export const TestimonialsCarousel = styled(Carousel)`
    padding: 40px 0;
`;
// export const TestimonialsCarouselBackground = styled.img`
//     display: block;
//     width: 100%;
// `;
export const TestimonialsCarouselCaption = styled(Carousel.Caption)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: static;
    max-width: 600px;
    padding-inline: 20px;
    font-style: italic;
    background-color: #b7b7b7;
    border-radius: 10px;
`;
export const TestimonialsCarouselItem = styled(Carousel.Item)`
    
`;
export const TestimonialsCarouselName = styled.p`
    font-weight: bold;
    text-align: end;
    padding-inline-end: 50px;
`;
export const TestimonialsCarouselText = styled.div`
    min-height: 330px;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 1.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`;
export const TestimonialsComment = styled.p`
    
`;