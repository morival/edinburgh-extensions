import * as React from "react";
import { graphql } from "gatsby";
import { Container } from '../components';
import { About, Banner, Intro, Projects, Services, Testimonials } from '../components/home';


export default function IndexPage({ data: { site: { siteMetadata: {
  title,
  services,
  quotes: { quote_home_about, quote_home_services, quote_home_projects, quote_home_testimonials } }},
  file} }) {

  return (
    <Container>
      <Banner file={file} title={title}/>
      <Intro />
      <Services slogan={quote_home_services} services={services} />
      <About slogan={quote_home_about} />
      <Projects slogan={quote_home_projects} />
      <Testimonials slogan={quote_home_testimonials} />
    </Container>
  )
}


export const query = graphql`
query HomeQuery {
  site {
    siteMetadata {
      title
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