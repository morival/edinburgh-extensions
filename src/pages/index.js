import * as React from "react";
import { graphql } from "gatsby";
import { Main } from '../components';
import { About, Intro, Projects, Services, Testimonials } from '../components/home';


export default function IndexPage({ data: { site: { siteMetadata: { services,
  quotes: { quote_home_about, quote_home_services, quote_home_projects, quote_home_testimonials } }}} }) {

  return (
    <Main>
      <Intro />
      <Services slogan={quote_home_services} services={services} />
      <About slogan={quote_home_about} />
      <Projects slogan={quote_home_projects} />
      <Testimonials slogan={quote_home_testimonials} />
    </Main>
  )
}


export const query = graphql`
query HomeQuery {
  site {
    siteMetadata {
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
}
`;