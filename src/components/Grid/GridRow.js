import React from 'react'

import {
  GridRowDom
} from './styles'

const GridRow = (props) => {

  const { children } = props

  return (
    <GridRowDom>
      {
        children
      }
    </GridRowDom>
  )
}

export default GridRow
