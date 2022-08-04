import * as React from "react"
import styled from "styled-components"


const StyledP = styled.p`
  color: ${({ theme }) => theme.color.text};
`


const IndexPage = () => {

  return (
        <StyledP>Some Text...</StyledP>
)
}

export default IndexPage;
