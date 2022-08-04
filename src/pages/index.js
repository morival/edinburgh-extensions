import * as React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"


const HomePageStyles = styled.div`
  .icons {
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
  }
  .icons svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.social_icons}
  }
`;



export default function IndexPage() {

  return (
    <HomePageStyles>
      <h1>Home Page</h1>
      <div className="icons">
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faInstagramSquare} />
      </div>
    </HomePageStyles>
  )
}
