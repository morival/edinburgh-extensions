import React from 'react';


export function Services({ slogan, services }) {

    const servicesComponent = () => 
    services.map((service, i) =>
      <div key={i}>
        <div>{service.relativePath}</div>
        <h3>{service.title}</h3>
      </div>)
    
    return (
        <section>
            <h3>{slogan}</h3>
            <div>
                {servicesComponent()}
            </div>
        </section>
    )
};
