import React, { Component } from 'react'
import Slider from './components/Slider'

class App extends Component {
  render() {
    return (
      <Slider
        randomHue={Math.ceil(Math.random() * 360)}
        randomSaturation={Math.ceil(Math.random() * 100)}
        randomLightness={Math.ceil(Math.random() * 100)}
        randomAlpha={Math.ceil(Math.random() * 100)}
      />
    )
  }
}

export default App
