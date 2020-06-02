import React from "react"

import sectionStyles from "../modules/section.module.scss"
const Section = props => {
  return <section className={sectionStyles.section}>{props.children}</section>
}

export default Section
