import React from "react"
import Layout from "./src/components/layout"
import Theme from "./src/components/theme"

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
    return <Theme>{element}</Theme>
}