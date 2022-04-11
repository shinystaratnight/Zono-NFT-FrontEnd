import React from 'react'

import {
  GridContainerDom
} from './styles'

const GridContainer = (props) => {

  const { children } = props

  return (
    <GridContainerDom>
      {children}
    </GridContainerDom>
  )
}

export default GridContainer
