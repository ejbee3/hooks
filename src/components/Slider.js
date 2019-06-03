import React, { useState } from 'react'

export default function Slider(props) {
  const [hue, setHue] = useState(props.randomHue)
  const [saturation, setSaturation] = useState(props.randomSaturation)
  const [lightness, setLightness] = useState(props.randomLightness)
  const [alpha, setAlpha] = useState(props.randomAlpha)


  // const updateSlider = event => {
  //   event.preventDefault()
  // }

  return (
    <>
     <main className="main-container">
        <h1>HSL color picker</h1>
<button onClick={() => }
       </main>
       </>
   
         
       
 
