import React from 'react'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import * as Element from './styles'

const About = () => {

  return (
    <Element.AboutSection>
      <GridContainer>
        <GridRow>
          <GridItem xl={12} lg={12} md={12} sm={12}>
            <Element.EarnMainBox>
              <Element.EarnAboutImages>
                <img src='/images/about.png' alt='About' />
                <Element.AboutEthCoin>
                  <img src='/images/eth-coin.png' alt='Eth Coin' />
                </Element.AboutEthCoin>
              </Element.EarnAboutImages>
              <Element.EarnAboutResponsive>
                <img src='/images/about-responsive.png' alt='About' />
              </Element.EarnAboutResponsive>
              <Element.EarnInfo>
                <Element.SectionTitleBox textAlign='left'>
                  <span>About</span>
                  <h2>Marketplace - Discover NFTs</h2>
                  <p className='sub-title'>
                    Unique NFTs - Digital Collectibles - may be found on this fresh new futuristic NFT platform.
                  </p>
                  <Element.EmBar margin='0 0 25px'>
                    <Element.EmBarBg></Element.EmBarBg>
                  </Element.EmBar>
                </Element.SectionTitleBox>
                <Element.SingelAboutBox>
                  <Element.SingelAboutBoxItem>
                    <Element.SingelAboutBoxIcon>
                      <img src='/images/nft_governance.png' alt='NFT Governance' />
                    </Element.SingelAboutBoxIcon>
                    <Element.SingelAboutBoxInfo>
                      <h3>Explore NFTs</h3>
                      <p>
                        NFTs include digital items such as visual arts, music, games, and video that are very unique.
                      </p>
                    </Element.SingelAboutBoxInfo>
                  </Element.SingelAboutBoxItem>
                  <Element.SingelAboutBoxItem>
                    <Element.SingelAboutBoxIcon>
                      <img src='/images/super_nft.png' alt='Super NFT' />
                    </Element.SingelAboutBoxIcon>
                    <Element.SingelAboutBoxInfo>
                      <h3>Buy & Sell NFTs</h3>
                      <p>
                        Sell your NFTs (digital collectibles) and earn in crypto, also buy NFTs with smart contracts.
                      </p>
                    </Element.SingelAboutBoxInfo>
                  </Element.SingelAboutBoxItem>
                </Element.SingelAboutBox>
              </Element.EarnInfo>
            </Element.EarnMainBox>
          </GridItem>
        </GridRow>
      </GridContainer>
    </Element.AboutSection>
  )
}

export default About
