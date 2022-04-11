import React from 'react'

import {
  GridItemDom
} from './styles'

const GridItem = (props) => {

  const { children, xl, lg, md, sm, xs } = props

  return (
    <GridItemDom xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
      { children }
    </GridItemDom>
  )
}

export default GridItem
