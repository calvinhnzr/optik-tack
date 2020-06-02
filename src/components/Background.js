import React from "react"

const Background = props => {
  const myStyles = {
    backgroundColor: props.color,
    position: "absolute",
    height: "100%",
    width: "100vw",
    left: "0",
    bottom: "0",
    zIndex: "-1",
    marginLeft: "calc(((100vw - 100%) / -2) )",
  }

  return <div style={myStyles} />
}

export default Background
