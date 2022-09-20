import React from 'react';
import { ServiceDescription, ServiceImage, ServiceInfo, ServiceTitle, ServiceWrapper } from '../elements';


export default function Service({ service, i }) {
    
    const theme = {
        
    }

    const even = i%2 === 0
    console.log(ServiceWrapper)
    return (
        <ServiceWrapper>
            <ServiceImage>image</ServiceImage>
            <ServiceInfo>
                <ServiceTitle>{service}</ServiceTitle>
                <ServiceDescription>description</ServiceDescription>
                <div>button</div>
            </ServiceInfo>
        </ServiceWrapper>
    )
};
