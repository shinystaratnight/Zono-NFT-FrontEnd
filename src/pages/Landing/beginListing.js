import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { useHistory } from 'react-router-dom'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import * as Element from './styles'

const BeginListing = () => {

  const { account } = useWeb3React();
  const history = useHistory()

  return (
    <Element.BeginListingSection>
      <GridContainer>
        <GridRow>
          <GridItem xl={12} lg={12} md={12} sm={12}>
            <Element.EarnMainBox>
              <Element.ListSellBox>
                <Element.ListSellTopImg>
                  <img src='/images/screen-top.png' alt='Screen Top' />
                </Element.ListSellTopImg>
                <Element.ListSellToken>
                  <img src='/images/token.png' alt='Token' />
                </Element.ListSellToken>
                <img src='/images/list-sell.png' alt='Sell' />
              </Element.ListSellBox>
              <Element.ListEarnImagesResponsive>
                <img src='/images/earn-listing-img.png' alt='Earn Listing' />
              </Element.ListEarnImagesResponsive>

              <Element.EarnInfo>
                <Element.SectionTitleBox textAlign='left'>
                  <h2>Begin Listing And Selling</h2>

                  <Element.EmBar margin='0 0 25px'>
                    <Element.EmBarBg></Element.EmBarBg>
                  </Element.EmBar>
                  <p className='sub-title'>
                    You are simply one click away from listing your NFT on our site and selling them for a lot of money.<br /><br />
                    Put your NFTS up for auction or for sale at a predetermined price. Acquire feedback from viewers, purchase NFTs, collect one-of-a-kind things, and resell them.
                  </p>
                  {
                    account && (
                      <Element.EarnBtn>
                        <Element.SaleBtn onClick={() => history.push('/create')}>
                          List Your NFT
                          <Element.ArrowrightIcon></Element.ArrowrightIcon>
                        </Element.SaleBtn>
                      </Element.EarnBtn>
                    )
                  }
                </Element.SectionTitleBox>
              </Element.EarnInfo>
            </Element.EarnMainBox>
          </GridItem>
        </GridRow>
      </GridContainer>
    </Element.BeginListingSection>
  )
}

export default BeginListing
