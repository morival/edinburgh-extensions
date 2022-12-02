import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import media from "styled-media-query";
import { Flex } from "./LayoutElements";

export const TestimonialsCarousel = styled(Carousel)`
    
`;
export const TestimonialsCarouselCaption = styled(Carousel.Caption)`
    ${media.greaterThan('medium')`
        max-width: 700px;
    `}
    ${media.greaterThan('large')`
        max-width: 800px;
    `}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: initial;
    font-style: italic;
    background-color: ${({ theme }) => theme.color.white};
`;
export const TestimonialsCarouselItem = styled(Carousel.Item)`
    
`;
export const TestimonialsCarouselName = styled.p`
    font-weight: bold;
    text-align: end;
    padding-inline-end: 50px;
`;
export const TestimonialsCarouselText = styled(Flex)`
    min-height: 400px;
    justify-content: center;
    position: relative;
    padding-block: 50px;
`;
export const TestimonialsComment = styled.div`
    p {
        font-size: 0.9em;
        ${media.greaterThan('small')`
            font-size: 0.95em;
        `}
    }
`;
export const TestimonialsQuote = styled.div`
    position: relative;
    padding: 40px;
`;
export const QuotationMark = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    & ~ & {
        top: auto;
        left: auto;
        right: 20px;
        bottom: 0;
    }
    font-size: 3rem;
`;