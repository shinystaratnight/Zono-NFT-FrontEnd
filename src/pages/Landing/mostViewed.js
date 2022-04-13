/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useWeb3React } from '@web3-react/core'
import { slice } from 'lodash'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import NftGridCard from 'components/NftGridCard'
import * as Element from './styles'

const MostViewed = () => {

  const { account } = useWeb3React();

  const [items, setItems] = useState([])

  const fetchItems = useCallback(() => {
    let paramData = {
      sortDir: 'desc',
      sortBy: 'likeCount',
      saleType: 'all'
    }

    axios.get("/api/item", {
      params: paramData
    })
      .then(res => {
        const sortedItems = res.data.items.filter((item => item.likeCount > 0)).sort(function (a, b) {
          return b.likeCount - a.likeCount;
        })
        setItems(slice(sortedItems, 0, 8))
      })
      .catch(() => {
        setItems([])
      })
  }, [account])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return (
    <Element.MostViewedSection>
      <GridContainer>
        <GridRow justifyContent='center'>
          <GridItem xl={12} lg={12} md={12} sm={12}>
            <Element.SectionTitleBox textAlign='center'>
              <span>Items</span>
              <h2>Items Most Favorited</h2>
              <Element.EmBar margin='0 auto 25px'>
                <Element.EmBarBg></Element.EmBarBg>
              </Element.EmBar>
              <p className='sub-title'>
                You can see the best and most viewed items; from all categories, we have a wide range of items available on our marketplace.
              </p>
            </Element.SectionTitleBox>
          </GridItem>
          {
            items.map((item, index) => (
              <GridItem xl={3} lg={4} md={4} sm={6} xs={12} key={index}>
                <NftGridCard item={item} />
              </GridItem>
            ))
          }
        </GridRow>
      </GridContainer>
    </Element.MostViewedSection>
  )
}

export default MostViewed
