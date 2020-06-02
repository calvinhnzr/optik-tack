import React from "react"

import Nav from "./Nav"
import FloatingNav from "./FloatingNav"
import Footer from "./Footer"

import "../styles/reset.scss"
import "../styles/global.scss"
import "../styles/contrast.scss"
import layoutStyles from "../modules/layout.module.scss"

const Layout2 = props => {



  return (
    <div className={layoutStyles.layout}>
      <Nav contrastMode={props.contrastMode} />
      <FloatingNav setContrastMode={props.setContrastMode} contrastMode={props.contrastMode} />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout2
