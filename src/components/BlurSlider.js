import React, { useState } from "react"

import blurSliderStyles from "../modules/blurSlider.module.scss"

const BlurSlider = props => {
  const [blurFilter, setBlurFilter] = useState(100)

  return (
    <div className={`${blurSliderStyles.container} ${props.className}`}>
      <img
        src={props.src}
        alt={props.name}
        style={{ filter: `blur(${(blurFilter / 100) * 6}px)` }}
      />

      <div className={blurSliderStyles.slider}>
        <input
          style={{
            background: `linear-gradient(to right, hsla(0, 0%, 0%, 0.2) 0%, hsla(0, 0%, 0%, 0.2) ${blurFilter}%, #000 ${blurFilter}%, #000 100%)`,
          }}
          type="range"
          id={props.id}
          name={props.id}
          min="0"
          max="100"
          value={blurFilter}
          onChange={e => setBlurFilter(e.target.value)}
        />
        <label
          htmlFor={props.id}
          style={props.contrastMode ? { color: "black" } : { color: "gray" }}
        >
          Verschieben Sie den Regler, <br />
          um das Bild scharf zu stellen.
        </label>
      </div>
    </div>
  )
}

export default BlurSlider
