import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import contactStyles from "../modules/contact.module.scss"

import BlurSlider from "./BlurSlider"
import Background from "./Background"

const Contact = props => {
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

  // safes values of form in state
  const [nachname, setNachname] = useState("")
  const [vorname, setVorname] = useState("")
  const [email, setEmail] = useState("")
  const [telefon, setTelefon] = useState("")
  const [nachricht, setNachricht] = useState("")
  // change state when a form was submited
  const [formSent, setFormSent] = useState(false)

  const handleSubmit = e => {
    //prevent page reload
    e.preventDefault()
    // set state to true
    setFormSent(true)
    // cleans form
    setNachname("")
    setVorname("")
    setTelefon("")
    setEmail("")
    setNachricht("")
  }

  const handleClick = () => {
    // removes opacity
    setFormSent(false)
  }

  const Feedback = () => {
    return (
      <div className={contactStyles.feedback}>
        <p>Wir melden uns umgehend mit einem Terminvorschlag.</p>
      </div>
    )
  }

  return (
    <section className={contactStyles.contact} id="contact">
      <Background color="#26354b" />
      <div className={contactStyles.intro}>
        <h2>Vereinbaren Sie einen Termin mit uns!</h2>
      </div>
      <BlurSlider
        src={data.sehtest.childImageSharp.desktop.src}
        name={data.sehtest.name}
        id={data.sehtest.id}
        className={contactStyles.container}
        contrastMode={props.contrastMode}
      />
      <form
        name="contact"
        method="post"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={formSent ? { opacity: 0.3 } : { opacity: 1 }}
      >
        {/* [IGNORE] necessarily for netflify forms */}
        <input type="hidden" name="form-name" value="contact" />{" "}
        <label className={contactStyles.vorname}>
          Vorname
          <input
            type="text"
            name="vorname"
            value={vorname}
            onChange={e => setVorname(e.target.value)}
            onClick={handleClick}
            placeholder="Erika"
            required
          />
        </label>
        <label className={contactStyles.nachname}>
          Name
          <input
            type="text"
            name="nachname"
            value={nachname}
            onChange={e => setNachname(e.target.value)}
            onClick={handleClick}
            placeholder="Mustermann"
            required
          />
        </label>
        <label className={contactStyles.email}>
          E-Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onClick={handleClick}
            placeholder="erika@mustermann.de"
            required
          />
        </label>
        <label className={contactStyles.telefon}>
          Telefon
          <input
            type="tel"
            name="telefon"
            value={telefon}
            onChange={e => setTelefon(e.target.value)}
            onClick={handleClick}
            placeholder="01234 56 78 9"
            required
          />
        </label>
        <label className={contactStyles.nachricht}>
          Ihr Anliegen in Kürze
          <textarea
            name="nachricht"
            value={nachricht}
            onChange={e => setNachricht(e.target.value)}
            onClick={handleClick}
            placeholder="(Brille, Kontaktlinsen, optometrische Messung, usw.)"
            required
          />
        </label>
        <button
          type="submit"
          className={contactStyles.button}
          // makes button not clickable after submit
          style={
            formSent ? { pointerEvents: "none" } : { pointerEvents: "inherit" }
          }
        >
          Senden
        </button>
      </form>
      {/* gives feedback when form was submited */}
      {formSent ? <Feedback /> : ""}
    </section>
  )
}

export default Contact
