import React from "react"
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa"

import footerStyles from "../modules/footer.module.scss"
import Background from "./Background"
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Background color="#26354b" />
      <div className={footerStyles.imprint}>
        <h2>Impressum</h2>
        <address>
          <h4>Optik Tack GmbH </h4>
          <p>Mozartstraße 37</p>
          <p>73430 Aalen</p>
          <p>Tel.: 07361/123451</p>
          <p>info@optik-tack.de</p>
          <p>www.optik-tack.de</p>
        </address>
        <div>
          <p>Geschäftsführer: Anton Tack</p>
          <p>Amtsgericht Aalen</p>
          <p>Handelsregister Nr. XXX000XXX,</p>
          <p>Finanzamt Aalen</p>
          <p>USt.IdNr.: DE10111011</p>
        </div>
      </div>
      <div className={footerStyles.social}>
        <a
          href="https://www.instagram.com/therealantontack/"
          target="_blank"
          rel="noopener noreferrer"
          title="zur Instagram-Seite"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/Optik-Tack-100588588353472/"
          target="_blank"
          rel="noopener noreferrer"
          title="zur Facebook-Seite"
        >
          <FaFacebook />
          <span>facebook</span>
        </a>
        <a
          href="https://www.pinterest.de/optiktack/"
          target="_blank"
          rel="noopener noreferrer"
          title="zur Pinterest-Seite"
        >
          <FaPinterest />
          <span>Pinterest</span>
        </a>
      </div>
      <div className={footerStyles.privacyPolicy}>
        <h2>Datenschutz</h2>
        <div>
          <p>
            Datenschutzhinweise gemäß
            <br /> EU-Datenschutz-Grundverordnung
            <br /> (DSGVO)
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
