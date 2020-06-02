import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import navStyles from "../modules/nav.module.scss"

const Nav = (props) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-white.png" }) {
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

  return (

    <nav className={props.contrastMode ? `${navStyles.nav} navContrast` : `${navStyles.nav}`}>
      <div className={navStyles.logo}>
        <img src={data.logo.childImageSharp.desktop.src} alt={`Optik Tack`} />
      </div>
      <ul>
        <li>
          <Link to="/#home">Home</Link>
        </li>
        <li>
          <Link to="/#about">Wir über uns</Link>
        </li>
        <li>
          <Link to="/#summer">Aktionen</Link>
        </li>
        <li>
          <Link to="/#contact">Terminvereinbarung</Link>
        </li>
        <li>
          <Link to="/#info">Infos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
