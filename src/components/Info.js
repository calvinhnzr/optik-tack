import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaMapMarkerAlt } from "react-icons/fa"

import infoStyles from "../modules/info.module.scss"

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      laden: file(relativePath: { eq: "bild-vom-laden.jpg" }) {
        id
        name
        childImageSharp {
          desktop: fluid(maxWidth: 900, quality: 100) {
            src
          }
        }
      }
      logo: file(relativePath: { eq: "logo-black.png" }) {
        id
        name
        childImageSharp {
          desktop: fluid(maxWidth: 300, quality: 100) {
            src
          }
        }
      }
    }
  `)
  const street = " Mozartstraße 37"
  const city = "73430 Aalen"
  return (
    <section className={infoStyles.info} id="info">
      <div className={infoStyles.logo}>
        <img
          src={data.logo.childImageSharp.desktop.src}
          alt="Optik Tack Logo"
        />
      </div>
      <div className={infoStyles.hours}>
        <h2>Öffnungs&shy;zeiten</h2>
        <h4>Montag bis Freitag:</h4>
        <p>
          <time>9:00</time> bis <time>18:00</time> Uhr
        </p>
        <h4>Samstag:</h4>
        <p>
          <time>9:00</time> bis <time>13:30</time> Uhr
        </p>
      </div>
      <div className={infoStyles.laden}>
        <img
          src={data.laden.childImageSharp.desktop.src}
          alt={data.laden.name}
        />
      </div>
      <div className={infoStyles.location}>
        <h2>
          Hier finden <br /> Sie uns
        </h2>
        <p>
          {street}
          <br /> {city}
        </p>
        <a
          href={`https://maps.google.com/?q=${street}, ${city}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt />
          zu Google Maps
        </a>
      </div>
    </section>
  )
}

export default Info
