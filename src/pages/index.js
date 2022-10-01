import { graphql } from "gatsby";
import * as React from "react";
import { Banner, Container } from '../components';
import { Button } from "../components/controls";


export default function IndexPage({ data: { site: { siteMetadata: {
  slogans: { slogan_home_1, slogan_home_2, slogan_home_3, slogan_home_4 },
  services
}}} }) {

  const servicesComponent = () => 
    services.map((service, i) =>
      <div key={i}>
        <div>{service.relativePath}</div>
        <h3>{service.title}</h3>
      </div>)
  
  return (
    <Container>
      <Banner />
      <h1>Home Page</h1>
      <section>
        <h3>{slogan_home_1}</h3>
        <div>
          <div>About Us Image</div>
          <div>
            <p>'Who we are and what do we do' description taking two or more lines.</p>
            <Button text='about us'/>
          </div>
        </div>
      </section>
      <section>
        <h3>{slogan_home_2}</h3>
        <div>
          {servicesComponent()}
        </div>
      </section>
      <section>
        <h3>{slogan_home_3}</h3>
        <div>
          <div>
            <p>'Our achievements' description taking two or more lines.</p>
            <Button text='our work'/>
          </div>
          <div>Our Work Image</div>
        </div>
      </section>
      <section style={({height: '300px'})}>
        <h3>{slogan_home_4}</h3>
        <div>Testimonials</div>
      </section>
    </Container>
  )
}


export const query = graphql`
query HomeQuery {
  site {
    siteMetadata {
      slogans {
        slogan_home_1
        slogan_home_2
        slogan_home_3
        slogan_home_4
      }
      services {
        title
        relativePath
      }
    }
  }
}
`;