import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import NftGridCard from 'components/NftGridCard'
import * as Element from './styles'

const LiveAuctions = () => {

  const [items, setItems] = useState([])

  const fetchItems = () => {
   
    let paramData = {
      sortDir: 'desc',
      sortBy: 'timestamp',
      searchTxt: '',
      saleType: 'auction'
    }

    axios.get("/api/item", {
      params: paramData
    })
      .then(res => {
        setItems(res.data.items)
      })
      .catch(() => {
        setItems([])
      })
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <Element.LiveAuctionsSection>
      <GridContainer>
        <GridRow>
          <GridItem xl={12} lg={12} md={12} sm={12}>
            <Element.SectionTitleBox textAlign='center'>
              <span>NFTs On Auction</span>
              <h2>Live auctions</h2>
              <Element.EmBar margin='0 auto 25px'>
                <Element.EmBarBg></Element.EmBarBg>
              </Element.EmBar>
              <p className='sub-title'>
                Explore the newly listed remarkable NFTs on &nbsp;
                <span className='token-info'>{ `${process.env.REACT_APP_TOKEN} NFT Marketplace` }</span>, choose the best one, and place your bid to purchase it.
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
    </Element.LiveAuctionsSection>
  )
}

export default LiveAuctions
