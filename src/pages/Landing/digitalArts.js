import React from 'react'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import * as Element from './styles'

const DigitalArts = () => {

  return (
    <Element.DigitalArtsSection>
      <GridContainer>
        <GridRow>
          <GridItem xl={12} lg={12} md={12} sm={12}>
            <Element.EarnMainBox>
              <Element.EarnInfo>
                <Element.SectionTitleBox textAlign='left'>
                  <span>Platform For Artists</span>
                  <h2>Digital Arts On NFT Platform</h2>
                  <Element.EmBar margin='0 0 25px'>
                    <Element.EmBarBg></Element.EmBarBg>
                  </Element.EmBar>
                  <p className='sub-title'>
                    Join the all-new NFTs marketplace if you're a musician, videographer, or visual artist.
                  </p>
                </Element.SectionTitleBox>
                <Element.SingelAboutBox>
                  <Element.SingelAboutBoxItem>
                    <Element.SingelAboutBoxIcon>
                      <img src='/images/nft_governance.png' alt='NFT Governance' />
                    </Element.SingelAboutBoxIcon>
                    <Element.SingelAboutBoxInfo>
                      <h3>List Your Items</h3>
                      <p>
                        You can list your NFTs, either at a fixed price or in an auction, using a streamlined process.
                      </p>
                    </Element.SingelAboutBoxInfo>
                  </Element.SingelAboutBoxItem>
                  <Element.SingelAboutBoxItem>
                    <Element.SingelAboutBoxIcon>
                      <img src='/images/super_nft.png' alt='Super NFT' />
                    </Element.SingelAboutBoxIcon>
                    <Element.SingelAboutBoxInfo>
                      <h3>Create Your Store</h3>
                      <p>
                        You can use this site to not only list your NFTs, but also to establish your own store and brand.
                      </p>
                    </Element.SingelAboutBoxInfo>
                  </Element.SingelAboutBoxItem>
                </Element.SingelAboutBox>
              </Element.EarnInfo>
              <Element.PlatformArtistImages>
                <Element.PlatformArtistLeft>
                  <Element.PlatformArtistBox>
                    <img src='/images/art-screen1.png' alt='Art' />
                  </Element.PlatformArtistBox>
                  <Element.PlatformArtistBox>
                    <img src='/images/art-screen2.png' alt='Art' />
                  </Element.PlatformArtistBox>
                  <Element.PlatformArtistBox>
                    <img src='/images/art-screen3.png' alt='Art' />
                  </Element.PlatformArtistBox>
                  <Element.PlatformArtistBox>
                    <img src='/images/art-screen4.png' alt='Art' />
                  </Element.PlatformArtistBox>
                </Element.PlatformArtistLeft>
                <Element.PlatformArtistCircle>
                  <img src='/images/round.png' alt='Round' />
                </Element.PlatformArtistCircle>
                <img src='/images/artist.png' alt='Earn' />
              </Element.PlatformArtistImages>
              <Element.EarnImages>
                <img src='/images/artist-responsive.png' alt='Artist' />
              </Element.EarnImages>
            </Element.EarnMainBox>
          </GridItem>
        </GridRow>
      </GridContainer>
    </Element.DigitalArtsSection>
  )
}

export default DigitalArts
