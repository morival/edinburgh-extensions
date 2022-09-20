import { graphql } from "gatsby";
import * as React from "react";
import { Container } from '../components';


export default function IndexPage({ data }) {

  console.log(data.site.siteMetadata.slogans)
  const { slogan_home_1, slogan_home_2, slogan_home_3 } = data.site.siteMetadata.slogans;
  return (
    <Container>
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
        <h3>What Our Clients Have To Say</h3>
      </section>
      <section></section>
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
      }
    }
  }
}
`;