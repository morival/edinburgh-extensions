import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { QuotationMark, SectionBlue, TestimonialsCarousel, TestimonialsCarouselCaption, TestimonialsCarouselItem, TestimonialsCarouselName, TestimonialsCarouselText, TestimonialsComment, TestimonialsQuote } from '../../elements';


export function Testimonials({ slogan }) {
    
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query TestimonialsQuery {
            allMarkdownRemark(filter: {frontmatter: {markdown: {eq: "testimonial"}}}) {
                nodes {
                    frontmatter {
                    name
                    project
                    date
                    }
                    html
                }
            }
        }
    `)

    const testimonialComponents = () => {
        return allMarkdownRemark.nodes
        .map(node => <TestimonialsCarouselItem key={node.frontmatter.name}>
            <TestimonialsCarouselText>
                <TestimonialsCarouselCaption>
                    <TestimonialsQuote>
                        <QuotationMark>“</QuotationMark>
                        <TestimonialsComment dangerouslySetInnerHTML={{ __html: node.html }} />
                        <QuotationMark>”</QuotationMark>
                    </TestimonialsQuote>
                    <TestimonialsCarouselName>- {node.frontmatter.name}</TestimonialsCarouselName>
                </TestimonialsCarouselCaption>
            </TestimonialsCarouselText>
        </TestimonialsCarouselItem>)
    }
    // console.log(allMarkdownRemark.nodes)

    return (
        <SectionBlue>
            <h3>{slogan}</h3>
            <TestimonialsCarousel variant="dark" controls={false} interval='120000'>
                {testimonialComponents()}
            </TestimonialsCarousel>
        </SectionBlue>
    )
};
