import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import media from "styled-media-query";

export const TestimonialsSection = styled.section`
    padding-block: 40px;
    background-color: lightgray;
`;
export const TestimonialsCarousel = styled(Carousel)`
    /* padding-block: 20px; */
`;
// export const TestimonialsCarouselBackground = styled.img`
//     display: block;
//     width: 100%;
// `;
export const TestimonialsCarouselCaption = styled(Carousel.Caption)`
    ${media.greaterThan('medium')`
        max-width: 600px;
        border-radius: 10px;
    `}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: static;
    padding-inline: 20px;
    font-style: italic;
    background-color: #b7b7b7;
`;
export const TestimonialsCarouselItem = styled(Carousel.Item)`
    
`;
export const TestimonialsCarouselName = styled.p`
    font-weight: bold;
    text-align: end;
    padding-inline-end: 50px;
`;
export const TestimonialsCarouselText = styled.div`
    min-height: 400px;
    display: flex;
    justify-content: center;
    position: relative;
    /* bottom: 1.25rem; */
    padding-block: 50px;
`;
export const TestimonialsComment = styled.p`
    ${media.lessThan('medium')`
        font-size: 0.95rem;
    `}
    ${media.lessThan('small')`
        font-size: 0.9rem;
    `}
`;