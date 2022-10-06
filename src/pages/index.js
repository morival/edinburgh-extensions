import * as React from "react";
import { graphql } from "gatsby";
import { About, Banner, Container, Projects, Services, Testimonials } from '../components';


export default function IndexPage({ data: { site: { siteMetadata: {
  slogans: { slogan_home_1, slogan_home_2, slogan_home_3, slogan_home_4 },
  services }},
  file} }) {

  return (
    <Container>
      <Banner file={file}/>
      {/* <h1>Home Page</h1> */}
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
  file(name: {eq: "ext02"}) {
    id
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}
`;