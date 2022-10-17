import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TestimonialsCarousel, TestimonialsCarouselCaption, TestimonialsCarouselItem, TestimonialsCarouselName, TestimonialsCarouselText, TestimonialsComment, TestimonialsPaper, TestimonialsSection } from '../elements';
import { Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export function Testimonials({ slogan }) {
    
    const { allMarkdownRemark } = useStaticQuery(graphql`
    query TestimonialsQuery {
        allMarkdownRemark(filter: {frontmatter: {name: {ne: null}}}) {
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
                    <TestimonialsComment dangerouslySetInnerHTML={{ __html: node.html }} />
                    <TestimonialsCarouselName>{node.frontmatter.name}</TestimonialsCarouselName>
                </TestimonialsCarouselCaption>
            </TestimonialsCarouselText>
        </TestimonialsCarouselItem>)
    }
    // console.log(allMarkdownRemark.nodes)
    const TestCarousel = () => {
        return (
            <Carousel sx={{ width: '100%' }} interval={12000}>
                {allMarkdownRemark.nodes.map(node =>
                    <TestimonialsPaper sx={{backgroundColor: '#b7b7b7' }} key={node.frontmatter.name}>
                        <Typography dangerouslySetInnerHTML={{ __html: node.html }} />
                        <Typography>{node.frontmatter.name}</Typography>
                    </TestimonialsPaper>)}
            </Carousel>
        )
    }

    return (
        <TestimonialsSection>
            <h3>{slogan}</h3>
            <TestimonialsCarousel variant="dark" controls={false} interval='12000'>
                {testimonialComponents()}
            </TestimonialsCarousel>
            {TestCarousel()}
        </TestimonialsSection>
    )
};
