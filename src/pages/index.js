import * as React from "react"
import styled from "styled-components"


const StyledP = styled.h1`
  color: ${({ theme }) => theme.color.text};
`



export default function IndexPage() {

  return (
    <StyledP>Home Page</StyledP>
  )
}
