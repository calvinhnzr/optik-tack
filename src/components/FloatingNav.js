import React, { useState } from "react"
import { FaPlus, FaChevronUp } from "react-icons/fa"
import { IoMdContrast } from "react-icons/io"
import Scrollspy from "react-scrollspy"

import floatingStyle from "../modules/floatingNav.module.scss"

const FloatingNav = props => {
  const [navActive, setNavActive] = useState(false)

  const Menu = () => {
    return (
      <div className={floatingStyle.menu}>
        <Scrollspy
          items={["home", "about", "summer", "contact", "info", "footer"]}
          currentClassName={floatingStyle.isCurrent}
          offset={-1}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Wir über uns</a>
          </li>
          <li>
            <a href="#summer">Aktionen</a>
          </li>
          <li>
            <a href="#contact">Terminvereinbarung</a>
          </li>
          <li>
            <a href="#info">Infos</a>
          </li>
        </Scrollspy>
      </div>
    )
  }

  const Fonts = () => {
    return (
      <div className={floatingStyle.fontSize}>
        <label title="kleine Schriftgröße">
          <input
            type="radio"
            name="fontSize"
            value="14px"
            onClick={() => (document.documentElement.style.fontSize = "14px")}
          />
          <span>T</span>
        </label>

        <label title="normale Schriftgöße">
          <input
            type="radio"
            name="fontSize"
            value="16px"
            onClick={() => (document.documentElement.style.fontSize = "16px")}
          />
          <span>T</span>
        </label>
        <label title="große Schriftgröße">
          <input
            type="radio"
            name="fontSize"
            value="18px"
            onClick={() => (document.documentElement.style.fontSize = "18px")}
          />
          <span>T</span>
        </label>
      </div>
    )
  }

  const Up = () => {
    return (
      <button className={floatingStyle.up} title="Zurück zum Anfang">
        <a href="#home">
          <FaChevronUp />
        </a>
      </button>
    )
  }
  function handleClick() {
    props.setContrastMode(!props.contrastMode)
  }

  const Contrast = props => {
    return (
      <button
        className={floatingStyle.contrast}
        className={
          props.contrastMode
            ? `${floatingStyle.contrast} ${floatingStyle.contrastOn}`
            : `${floatingStyle.contrast}`
        }
        onClick={handleClick}
        title="Kontrast erhöhen"
      >
        <IoMdContrast />
      </button>
    )
  }

  const Nav = props => {
    return (
      <div className={floatingStyle.nav}>
        <Menu />
        <div className={floatingStyle.control}>
          <div className={floatingStyle.space} />
          <Fonts />
          <div className={floatingStyle.right}>
            <Contrast contrastMode={props.contrastMode} />
            <Up />
          </div>
        </div>
      </div>
    )
  }

  const ToggleNav = () => {
    return (
      <label
        className={floatingStyle.toggleNav}
        title={navActive ? "Navigation schließen" : "Navigation öffnen"}
      >
        <input
          type="checkbox"
          checked={navActive}
          onChange={() => setNavActive(!navActive)}
        />
        <FaPlus />
      </label>
    )
  }

  return (
    <div className={floatingStyle.bubble}>
      {navActive ? (
        <Nav
          setContrastMode={props.setContrastMode}
          contrastMode={props.contrastMode}
        />
      ) : (
        ""
      )}

      <ToggleNav />
    </div>
  )
}

export default FloatingNav
