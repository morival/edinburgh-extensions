import * as React from "react";
import { graphql } from "gatsby";
import { Banner, Main } from '../components';
import { About, Intro, Projects, Services, Testimonials } from '../components/home';


export default function IndexPage({ data: { site: { siteMetadata: { links,
  services,
  quotes: { quote_home_about, quote_home_services, quote_home_projects, quote_home_testimonials } }}} }) {

  const page = links.find(({link}) => link === "home") 

  return (
    <Main>
      <Banner link={page.link} />
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
      links {
        link
        name
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
}

`;