import React, { useState } from 'react'

export default function Slider(props) {
  const [hue, setHue] = useState(props.randomHue)
  const [saturation, setSaturation] = useState(props.randomSaturation)
  const [lightness, setLightness] = useState(props.randomLightness)
  const [alpha, setAlpha] = useState(props.randomAlpha)

  return (
    <>
      <main className="main-container">
        <h1>HSL color picker</h1>
        <div className="color-container">
          <section
            className="color-area"
            style={{
              backgroundColor: `hsl(${hue},${saturation}%,${lightness}%, 0.${alpha})`
            }}
          />
        </div>

        <div>
          <section>
            <p>H: {hue}</p>
            <input
              type="range"
              min="1"
              max="360"
              value={hue}
              onChange={e => setHue(e.target.value)}
            />
          </section>
          <section>
            <p>S: {saturation}%</p>
            <input
              type="range"
              min="1"
              max="100"
              value={saturation}
              onChange={e => setSaturation(e.target.value)}
            />
          </section>
          <section>
            <p>L: {lightness}%</p>
            <input
              type="range"
              min="1"
              max="100"
              value={lightness}
              onChange={e => setLightness(e.target.value)}
            />
          </section>
          <section>
            <p>A: {alpha}%</p>
            <input
              type="range"
              min="1"
              max="99"
              value={alpha}
              onChange={e => setAlpha(e.target.value)}
            />
          </section>
        </div>
      </main>
    </>
  )
}
