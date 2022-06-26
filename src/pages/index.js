import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../sections/Hero"
import About from "../sections/About"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Giselle Pacheco</title>
      <Hero />
      <About />
    </Layout>
  )
}

export default IndexPage
