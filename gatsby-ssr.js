import React from "react"
import { Layout, Theme } from "./src/components";

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
    return <Theme>{element}</Theme>
}