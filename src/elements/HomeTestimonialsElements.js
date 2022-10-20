import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import media from "styled-media-query";
import { Section } from "./ThemeElements";

export const TestimonialsCarousel = styled(Carousel)`
    
`;
export const TestimonialsCarouselCaption = styled(Carousel.Caption)`
    ${media.greaterThan('medium')`
        max-width: 600px;
        border-radius: 10px;
    `}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: sticky;
    /* padding-inline: 20px; */
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
export const TestimonialsCarouselText = styled.div`
    min-height: 400px;
    display: flex;
    justify-content: center;
    position: relative;
    padding-block: 50px;
`;
export const TestimonialsComment = styled.div`
    p {
        ${media.lessThan('medium')`
            font-size: 0.95rem;
        `}
        ${media.lessThan('small')`
            font-size: 0.9rem;
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
    ${media.lessThan('small')`
        left: 15px;
    `}
    & ~ & {
        top: auto;
        left: auto;
        right: 20px;
        bottom: 0;
        ${media.lessThan('small')`
            right: 15px;
        `}
    }
    font-size: 3rem;
`;
export const TestimonialsSection = styled(Section)`
    background-color: ${({ theme }) => theme.color.lightgray};
    padding-block: 60px;
`;