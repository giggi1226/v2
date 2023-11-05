import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"

// markup
const IndexPage = () => {
    return (
        <Layout>
            <title>Giselle Pacheco</title>
            <Hero />
            <Projects />
        </Layout>
    )
}

export default IndexPage