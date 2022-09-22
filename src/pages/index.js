import { graphql } from "gatsby";
import * as React from "react";
import { Banner, Container } from '../components';


export default function IndexPage({ data }) {

  // console.log(data.site.siteMetadata.slogans)
  const { slogan_home_1, slogan_home_2, slogan_home_3, slogan_home_4 } = data.site.siteMetadata.slogans;
  return (
    <Container>
      <Banner />
      <h1>Home Page</h1>
      <section>
        <h3>{slogan_home_1}</h3>
      </section>
      <section>
        <h3>{slogan_home_2}</h3>
      </section>
      <section>
        <h3>{slogan_home_3}</h3>
      </section>
      <section>
        <h3>{slogan_home_4}</h3>
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
    }
  }
}
`;