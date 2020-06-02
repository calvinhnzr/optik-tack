import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout2 from "../components/Layout2"
import Section from "../components/Section"
import Header2 from "../components/Header2"
import Intro from "../components/Intro"
import About from "../components/About"
import Summer from "../components/Summer"
import BlurSlider from "../components/BlurSlider"
import Contact from "../components/Contact"
import Info from "../components/Info"
import Head from "../components/Head"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      sehtest: file(relativePath: { eq: "sehtest.png" }) {
        id
        name
        childImageSharp {
          desktop: fluid(maxWidth: 900, quality: 100) {
            src
          }
        }
      }
    }
  `)

  const [contrastMode, setContrastMode] = useState(false)

  return (
    <div>
      <Layout2 contrastMode={contrastMode} setContrastMode={setContrastMode}>
        <Head />
        <Header2 contrastMode={contrastMode} />
        <Intro />
        <About />
        <Summer contrastMode={contrastMode} />
        <Section>
          <BlurSlider
            contrastMode={contrastMode}
            src={data.sehtest.childImageSharp.desktop.src}
            name={data.sehtest.name}
            id={data.sehtest.id}
          />
        </Section>
        <Contact contrastMode={contrastMode} />
        <Info />
      </Layout2>
    </div>
  )
}

export default Index
