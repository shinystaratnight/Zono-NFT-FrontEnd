import React from 'react'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import * as Element from './styles'

const GuidesArea = () => {

  return (
    <Element.GuidesAreaSection>
      <GridContainer>
        <GridRow>
          <GridItem xl={12} lg={12} md={12} sm={12}>
            <Element.SectionTitleBox textAlign='center'>
              <span>Guides</span>
              <h2>
                {`Guides For NFT${process.env.REACT_APP_TOKEN}`}
              </h2>
              <Element.EmBar margin='0 auto 25px'>
                <Element.EmBarBg></Element.EmBarBg>
              </Element.EmBar>
              <p className='sub-title'>
                Get to know how to use NFTLand - Marketplace, how to sell or buy, and how to create your store on our platform.
              </p>
            </Element.SectionTitleBox>
          </GridItem>
        </GridRow>
        <GridRow>
          <GridItem xl={4} lg={4} md={4} sm={12}>
            <Element.GuideBox>
              <Element.GuideMedia>
                <img src='/images/mintale1.png' alt='Guide' />
              </Element.GuideMedia>
              <Element.GuideInfo>
                <h3>What Are NFTs?</h3>
                <p>
                  NFTs (non-fungible tokens) that exist on the blockchain as cryptocurrencies, and each NFTs has its own token value.
                </p>
              </Element.GuideInfo>
            </Element.GuideBox>
          </GridItem>

          <GridItem xl={4} lg={4} md={4} sm={12}>
            <Element.GuideBox>
              <Element.GuideMedia>
                <img src='/images/mintale3.png' alt='Guide' />
              </Element.GuideMedia>
              <Element.GuideInfo>
                <h3>Method To List Items?</h3>
                <p>
                  To list your NFT, just establish an account, link your wallet, and provide the basic information about the item.
                </p>
              </Element.GuideInfo>
            </Element.GuideBox>
          </GridItem>

          <GridItem xl={4} lg={4} md={4} sm={12}>
            <Element.GuideBox>
              <Element.GuideMedia>
                <img src='/images/mintale2.png' alt='Guide' />
              </Element.GuideMedia>
              <Element.GuideInfo>
                <h3>Method Of Selling?</h3>
                <p>
                  It's critical to give more descriptive details and demonstrate how unique digital products are when selling any NFT.
                </p>
              </Element.GuideInfo>
            </Element.GuideBox>
          </GridItem>
        </GridRow>
      </GridContainer>
    </Element.GuidesAreaSection>
  )
}

export default GuidesArea
