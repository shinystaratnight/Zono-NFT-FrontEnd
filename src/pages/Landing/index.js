import React from 'react'

import Slider from './slider'
import LiveAuctions from './liveAuctions'
import About from './about'
import MostViewed from './mostViewed'
import DigitalArts from './digitalArts'
import BeginListing from './beginListing'
import GuidesArea from './guidesArea'

const Landing = (props) => {

  return (
    <div>
      <Slider />
      <LiveAuctions />
      <About />
      <MostViewed />
      <DigitalArts />
      <BeginListing />
      <GuidesArea />
    </div>
  )
}

export default Landing
