import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Background from "../components/Background"
import summerStyles from "../modules/summer.module.scss"

const Summer = (props) => {
  const carouselRef = useRef(null)
  const barRef = useRef(null)
  useEffect(() => {
    const bar = barRef.current
    const carousel = carouselRef.current
    const block = document.getElementsByClassName(`${summerStyles.block}`)

    // set default width
    bar.style.width = 100 / block.length + "%"
    function progressBarScroll() {
      let scrolled =
        (((carousel.scrollLeft /
          (carousel.scrollWidth - carousel.clientWidth)) *
          100) /
          block.length) *
        (block.length - 1) // (x - 1) / x
      bar.style.width = 100 / block.length + scrolled + "%"
    }
    carousel.addEventListener("scroll", progressBarScroll, false)
  })

  const data = useStaticQuery(graphql`
    query {
      slide1: file(
        relativePath: { eq: "grid/01-brille-stellt-text-scharf.jpg" }
      ) {
        id
        name
        childImageSharp {
          mobile: fluid(maxHeight: 448) {
            src
          }
        }
      }

      slide2: file(relativePath: { eq: "grid/02-mann-mit-bart-lachend.jpg" }) {
        id
        name
        childImageSharp {
          mobile: fluid(maxHeight: 448) {
            src
          }
        }
      }

      slide3: file(relativePath: { eq: "grid/03-kinder-im-wasser.jpg" }) {
        id
        name
        childImageSharp {
          mobile: fluid(maxHeight: 448) {
            src
          }
        }
      }

      slide4: file(
        relativePath: { eq: "grid/04-auswahl-von-sonnenbrillen.jpg" }
      ) {
        id
        name
        childImageSharp {
          mobile: fluid(maxHeight: 448) {
            src
          }
        }
      }

      slide5: file(relativePath: { eq: "grid/05-augenglasbestimmung.jpg" }) {
        id
        name
        childImageSharp {
          mobile: fluid(maxHeight: 448) {
            src
          }
        }
      }
      slide6: file(
        relativePath: { eq: "grid/06-alte-frau-liegend-musik-hoerend.jpg" }
      ) {
        id
        name
        childImageSharp {
          mobile: fluid(maxHeight: 448) {
            src
          }
        }
      }
    }
  `)

  const slides = [
    {
      title: "Schnelle Brillenreparatur",
      alt: data.slide1.name,
      src: {
        mobile: data.slide1.childImageSharp.mobile.src,
      },
    },
    {
      title: "Verschenken Sie gute Sicht!",
      alt: data.slide2.name,
      src: {
        mobile: data.slide2.childImageSharp.mobile.src,
      },
    },
    {
      title: "Sommerrätsel für Kinder und Erwachsene",
      alt: data.slide3.name,
      src: {
        mobile: data.slide3.childImageSharp.mobile.src,
      },
    },
    {
      title: "Gutscheine zu gewinnen",
      alt: data.slide4.name,
      src: {
        mobile: data.slide4.childImageSharp.mobile.src,
      },
    },
    {
      title: "Lassen Sie sich beraten!",
      alt: data.slide5.name,
      src: {
        mobile: data.slide5.childImageSharp.mobile.src,
      },
    },
    {
      title: "Rabatte auf Sonnenbrillen für Groß und Klein",
      alt: data.slide6.name,
      src: {
        mobile: data.slide6.childImageSharp.mobile.src,
      },
    },
  ]

  const Block = props => {
    return (
      <div className={summerStyles.block}>
        <h4>{props.value.title}</h4>
        <div className={props.contrastMode ? `summerContrast` : ""}></div>
        <img src={props.value.src.mobile} alt={props.value.alt} />
      </div>
    )
  }

  const Progressbar = () => {
    return (
      <div className={summerStyles.progressContainer}>
        <div className={summerStyles.progressBar} ref={barRef}></div>
      </div>
    )
  }

  return (
    <section className={summerStyles.summer} id="summer">
      <div className={summerStyles.intro}>
        <h2>Sommer&shy;aktion</h2>
        <p>
          vom <time dateTime="2020-07-6">Montag 6. Juli</time>
          <br /> bis <time dateTime="2020-07-25">Samstag 25. Juli 2020</time>
        </p>
      </div>
      <div className={summerStyles.carousel} ref={carouselRef}>
        {slides.map((value, index) => {
          return <Block key={index} value={value} contrastMode={props.contrastMode} />
        })}
      </div>
      <Progressbar />
      <p className={summerStyles.label}>
        Wischen Sie nach links, <br />
        um weitere Aktionen zu sehen.
      </p>
      <Background color={"#ffe6a6"} />
    </section>
  )
}

export default Summer
