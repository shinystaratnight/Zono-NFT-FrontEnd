import React from 'react'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import * as Element from './styles'

import Slider from './slider'
import LiveAuctions from './liveAuctions'
import About from './about'

const Landing = (props) => {

  return (
    <div>
      <Slider />
      <LiveAuctions />
      <About />
    </div>
  )
}

export default Landing
