import React from "react"
import introStyles from "../modules/intro.module.scss"

const Intro = () => {
  return (
    <section className={introStyles.intro}>
      <blockquote>
        <p>
          »Damit
          <br /> Ihre Optik
          <br /> stimmt«
        </p>
      </blockquote>
    </section>
  )
}

export default Intro
