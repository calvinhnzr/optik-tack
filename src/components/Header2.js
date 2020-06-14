import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaPlay, FaPause } from "react-icons/fa"
import headerStyles from "../modules/header.module.scss"

const Header2 = (props) => {
  // slider by @mistlav, https://codepen.io/mistlav/pen/wJXpXg
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "slider/01-familie-im-auto.jpg" }) {
        childImageSharp {
          desktop: fluid(maxWidth: 1280, quality: 100) {
            src
            originalName
          }
        }
      }
      slide1mobile: file(
        relativePath: { eq: "slider/01-familie-im-auto-mobile.jpg" }
      ) {
        childImageSharp {
          mobile: fluid(maxWidth: 600, quality: 100) {
            src
            originalName
          }
        }
      }
      slide2: file(relativePath: { eq: "slider/02-kinder-im-wasser.jpg" }) {
        childImageSharp {
          desktop: fluid(maxWidth: 1280, quality: 100) {
            src
            originalName
          }
        }
      }
      slide2mobile: file(
        relativePath: { eq: "slider/02-kinder-im-wasser-mobile.jpg" }
      ) {
        childImageSharp {
          mobile: fluid(maxWidth: 600, quality: 100) {
            src
            originalName
          }
        }
      }
      slide3: file(relativePath: { eq: "slider/03-kind-haelt-auge-zu.jpg" }) {
        childImageSharp {
          desktop: fluid(maxWidth: 1280, quality: 100) {
            src
            originalName
          }
        }
      }
      slide3mobile: file(
        relativePath: { eq: "slider/03-kind-haelt-auge-zu-mobile.jpg" }
      ) {
        childImageSharp {
          mobile: fluid(maxWidth: 600, quality: 100) {
            src
            originalName
          }
        }
      }
      slide4: file(
        relativePath: { eq: "slider/04-kundin-bekommt-neue-brille.jpg" }
      ) {
        childImageSharp {
          desktop: fluid(maxWidth: 1280, quality: 100) {
            src
            originalName
          }
        }
      }
      slide4mobile: file(
        relativePath: { eq: "slider/04-kundin-bekommt-neue-brille-mobile.jpg" }
      ) {
        childImageSharp {
          mobile: fluid(maxWidth: 600, quality: 100) {
            src
            originalName
          }
        }
      }
      slide5: file(
        relativePath: { eq: "slider/05-kundin-sucht-brille-aus.jpg" }
      ) {
        childImageSharp {
          desktop: fluid(maxWidth: 1280, quality: 100) {
            src
            originalName
          }
        }
      }
      slide5mobile: file(
        relativePath: { eq: "slider/05-kundin-sucht-brille-aus-mobile.jpg" }
      ) {
        childImageSharp {
          mobile: fluid(maxWidth: 600, quality: 100) {
            src
            originalName
          }
        }
      }
      slide6: file(relativePath: { eq: "slider/06-mann-mit-bart-ernst.jpg" }) {
        childImageSharp {
          desktop: fluid(maxWidth: 1280, quality: 100) {
            src
            originalName
          }
        }
      }
      slide6mobile: file(
        relativePath: { eq: "slider/06-mann-mit-bart-ernst-mobile.jpg" }
      ) {
        childImageSharp {
          mobile: fluid(maxWidth: 600, quality: 100) {
            src
            originalName
          }
        }
      }
    }
  `)

  const slides = [
    {
      title: (
        <span>
          Klare Sicht und <br />
          gute Laune – <br />
          Optik Tack
        </span>
      ),
      src: {
        desktop: data.slide1.childImageSharp.desktop,
        mobile: data.slide1mobile.childImageSharp.mobile,
      },
    },
    {
      title: (
        <span>
          Schutz und Schönheit –<br />
          Sonnenbrillen von Optik&nbsp;Tack
        </span>
      ),
      src: {
        desktop: data.slide2.childImageSharp.desktop,
        mobile: data.slide2mobile.childImageSharp.mobile,
      },
    },
    {
      title: (
        <span>
          Mit Kind und Kegel <br />
          zu Optik&nbsp;Tack
        </span>
      ),
      src: {
        desktop: data.slide3.childImageSharp.desktop,
        mobile: data.slide3mobile.childImageSharp.mobile,
      },
    },
    {
      title: (
        <span>
          Optik&nbsp;Tack – ein&nbsp;Tick mehr Durchblick als anderswo
        </span>
      ),
      src: {
        desktop: data.slide4.childImageSharp.desktop,
        mobile: data.slide4mobile.childImageSharp.mobile,
      },
    },
    {
      title: (
        <span>
          Mit Optik&nbsp;Tack <br /> modisch auf Zack
        </span>
      ),
      src: {
        desktop: data.slide5.childImageSharp.desktop,
        mobile: data.slide5mobile.childImageSharp.mobile,
      },
    },
    {
      title: (
        <span>
          Tragen Sie’s mit
          <br /> (modischer) Fassung!
        </span>
      ),
      src: {
        desktop: data.slide6.childImageSharp.desktop,
        mobile: data.slide6mobile.childImageSharp.mobile,
      },
    },
  ]

  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const max = slides.length

  const intervalBetweenSlides = () => {
    autoplay && setActive(active === max - 1 ? 0 : active + 1)
  }
  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 5000)

    return () => {
      clearInterval(interval)
    }
  })

  const toggleAutoPlay = () => setAutoplay(!autoplay)

  const isActive = value => active === value && "active"

  const setSliderStyles = () => {
    const transition = active * -100
    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    }
  }

  const renderSlides = () =>
    slides.map((item, index) => (
      <div key={index} className={headerStyles.slide}>

        <div className={props.contrastMode ? `${headerStyles.title} animationContrast` : `${headerStyles.title}`}>
          <h3 className={isActive(index) && autoplay ? headerStyles.blur : ""}>
            {item.title}
          </h3>
        </div>
        <picture>
          <source srcSet={item.src.mobile.src} media="(max-width: 600px)" />
          {/* desktop */}
          <source srcSet={item.src.desktop.src} media="(max-width: 1200px)" />

          <img src={item.src.desktop.src} alt={item.title} />
        </picture>
      </div>
    ))

  const renderDots = () =>
    slides.map((
      silde,
      index // check index
    ) => (
        <li className={isActive(index) + " timer"} key={index}>
          {isActive(index) ? (
            <div className={headerStyles.landoltring}>
              <svg
                version="1.1"
                id="Ebene_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 500 500"
                fill="currentColor"
                className={autoplay ? headerStyles.rotate : ""}
              >
                <g>
                  <path
                    className="st0"
                    d="M300,5.01v103.54c58.26,20.59,100,76.14,100,141.45c0,82.84-67.16,150-150,150s-150-67.16-150-150
  c0-65.31,41.74-120.86,100-141.45V5.01C85.89,28.17,0,129.05,0,250c0,138.07,111.93,250,250,250s250-111.93,250-250
  C500,129.05,414.11,28.17,300,5.01z"
                  />
                </g>
              </svg>
            </div>
          ) : (
              <button onClick={() => setActive(index)}>
                <div className={headerStyles.circle}></div>
              </button>
            )}
        </li>
      ))

  return (
    <header className={headerStyles.header} id="home">
      <div className={headerStyles.slider} style={setSliderStyles()}>
        {renderSlides()}
      </div>
      <ul className={headerStyles.timer}>{renderDots()}</ul>
      <button
        className={headerStyles.toggle}
        onClick={toggleAutoPlay}
        title={autoplay ? "Wiedergabe anhalten" : "Wiedergabe starten"}
      >
        {autoplay ? <FaPause /> : <FaPlay />}
      </button>
    </header>
  )
}

export default Header2
