import * as React from "react";
import { graphql } from "gatsby";
import { About, Banner, Container, Projects, Services } from '../components';
import Testimonials from "../components/Testimonials";


export default function IndexPage({ data: { site: { siteMetadata: {
  slogans: { slogan_home_1, slogan_home_2, slogan_home_3, slogan_home_4 },
  services
}}} }) {

  return (
    <Container>
      <Banner />
      <h1>Home Page</h1>
      <About slogan={slogan_home_1} />
      <Services slogan={slogan_home_2} services={services} />
      <Projects slogan={slogan_home_3} />
      <Testimonials slogan={slogan_home_4} />
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