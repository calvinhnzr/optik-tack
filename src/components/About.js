import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlurSlider from "./BlurSlider"
import aboutStyles from "../modules/about.module.scss"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      modisch: file(relativePath: { eq: "junge-frau-modisch.jpg" }) {
        id
        name
        childImageSharp {
          desktop: fluid(maxWidth: 600, quality: 100) {
            src
          }
        }
      }
    }
  `)
  return (
    <section className={aboutStyles.about} id="about">
      <div className={aboutStyles.text}>
        <h1>Optik Tack</h1>
        <p>
          Bei Optik Tack in Aalen erwartet Sie exzellente Beratung in angenehmer
          Atmosphäre. Wir setzen all unsere handwerklich-technischen
          Fertigkeiten für Ihre Augen, fürs bessere Sehen ein. Und jenen
          Kundinnen und Kunden, die sich nur schlecht damit abfinden können, ab
          jetzt ständig eine Brille tragen zu müssen, sagen wir:
        </p>
      </div>

      <blockquote>
        <p>
          Tragen Sie’s mit <br />
          <span className={aboutStyles.modisch}>(modischer)</span>
          <br /> Fassung!
        </p>
      </blockquote>
      <BlurSlider
        src={data.modisch.childImageSharp.desktop.src}
        name={data.modisch.name}
        id={data.modisch.id}
        className={aboutStyles.container}
      />
    </section>
  )
}
export default About
