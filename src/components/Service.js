import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ServiceButton, ServiceDescription, ServiceDetailsContainer, ServiceImage, ServiceInfoContainer, ServiceTitle, ServiceTypesContainer, ServiceWrapper } from '../elements';
import { Link } from 'gatsby';


export function Service({ service: { title, description, types }, edge: { node } }) {
 
    const image = getImage(node)
    // console.log(types)
    const serviceTypes = () => 
        types.map((type, i) => 
            <h6 key={i}>{type}</h6>
        )

    // const servicesList = () =>
    //     subServices.map((service, i) =>
    //         <h6 key={i}>{service}</h6>
    //     )

    return (
        <ServiceWrapper id={title}>
            <ServiceImage className='image'>
                <GatsbyImage image={image} style={{height:'100%', width:'100%'}} alt={title} />
            </ServiceImage>
            <ServiceInfoContainer>
                <ServiceTitle>
                    {title}
                </ServiceTitle>
                <ServiceDescription>
                    <h5>{description}</h5>
                </ServiceDescription>
                <ServiceDetailsContainer>
                    <h5>Types of {title} Edinburgh Extensions carry out accounts for:</h5>
                    <ServiceTypesContainer>{serviceTypes()}</ServiceTypesContainer>
                    {/* <div>
                        <h5>Sub-services</h5>
                        {servicesList()}
                    </div> */}
                </ServiceDetailsContainer>
                <Link to='/projects' state={{ filter: title }}>
                    <ServiceButton text={'VIEW OUR PREVIOUS PROJECTS'}/>
                </Link>
            </ServiceInfoContainer>
        </ServiceWrapper>
    )
};
