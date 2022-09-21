// import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ServiceDescription, ServiceImage, ServiceInfo, ServiceTitle, ServiceWrapper } from '../elements';


export default function Service({ service, node, i }) {
    
    const { title, description } = service;
    const image = getImage(node.node)

    // const data = useStaticQuery(graphql`
    // query ServiceQuery($image: String!) {
    //     file(name: {eq: $image}) {
    //       childImageSharp {
    //         gatsbyImageData(layout: FULL_WIDTH)
    //       }
    //     }
    //   }   
    // `);

    // const variables = { "image": "con-example" }
    // console.log(data)

    const even = i%2 === 0
    console.log(image)
    return (
        <ServiceWrapper even={even}>
            <ServiceImage><GatsbyImage image={image} alt={title}></GatsbyImage></ServiceImage>
            <ServiceInfo>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>{description}</ServiceDescription>
                <div>button</div>
            </ServiceInfo>
        </ServiceWrapper>
    )
};
