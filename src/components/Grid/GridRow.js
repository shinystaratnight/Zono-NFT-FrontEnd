import React from 'react'

import {
  GridRowDom
} from './styles'

const GridRow = (props) => {

  const { children, justifyContent } = props

  return (
    <GridRowDom justifyContent={justifyContent}>
      {
        children
      }
    </GridRowDom>
  )
}

export default GridRow
