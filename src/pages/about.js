import React from 'react';
import { graphql } from 'gatsby';
import { ComponentTitle } from '../elements';

export default function About({ data: { site: { siteMetadata: { quotes: { quote_about } } } } }) {


  return (
    <main>
      <section>
        <ComponentTitle>
          <h3>{quote_about}</h3>
        </ComponentTitle>
      </section>
      <section>
        <div>
          <h6>(explaining why you and your uncle decided to start a family business)</h6>
          <br />
          <h6>We are a small family business where we put all our focus on one project at a time.</h6>
          <h6>Every job we do is unique and consulting ideas with our clients allows us to tailor every detail to suit their demands.</h6>
          <h6>Our work is driven by shared common values: enthusiasm???, determination and passion.</h6>
          <h3>Meet the crew</h3>
          <h6>Stan</h6>
          <h6>Bartek was 12 when his building journey began. In his free time he was helping his uncle Stan on sites carrying out light tasks. In 2018 he decided to leave the university and pursue his career as a joiner. After completing his apprenticeship, Bartek and Stan decided to join their forces and start Edinburgh Extensions.</h6>
          {/* We are here to perfect your space. By treating every project like it's our own we deliver projects to */}
          {/* <p>We are a small family run partnership where we put all our focus and time on one project at a time. This means we consider and think over every micro detail on a project providing the customer with exactly what they expect. Our whole team is very well synchronised and works efficiently which enables us to finish projects in the timeframe provided before commencing the works. We do weekly meetings with our clients and architects on jobs to inform and update about each stage of the job. This also allows clients to see how their future home is being crafted. Stan has over 30 years of experience in the trade meaning that there is not a problem that cannot be resolved and Bartek brings in the innovative modern way of thinking.</p> */}
        </div>
      </section>
    </main>
  )
}


export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        quotes {
          quote_about
        }
      }
    }
  }
  `;