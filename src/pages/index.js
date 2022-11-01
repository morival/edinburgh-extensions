import * as React from "react";
import { graphql } from "gatsby";
import { About, Banner, Container, Projects, Services, Testimonials } from '../components';


export default function IndexPage({ data: { site: { siteMetadata: {
  links: { link_1 },
  services,
  quotes: { quote_home_about, quote_home_services, quote_home_projects, quote_home_testimonials } }},
  file} }) {

  return (
    <Container>
      <Banner file={file}/>
      <h1>{link_1}</h1>
      <About slogan={quote_home_about} />
      <Services slogan={quote_home_services} services={services} />
      <Projects slogan={quote_home_projects} />
      <Testimonials slogan={quote_home_testimonials} />
    </Container>
  )
}


export const query = graphql`
query HomeQuery {
  site {
    siteMetadata {
      links {
        link_1
      }
      services {
        title
        relativePath
      }
      quotes {
        quote_home_about
        quote_home_services
        quote_home_projects
        quote_home_testimonials
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