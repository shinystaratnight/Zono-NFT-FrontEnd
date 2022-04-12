import React from 'react'

import { GridContainer, GridItem } from 'components/Grid'
import * as Element from './styles'

const Slider = (props) => {

  return (
    <Element.SliderSection>
      <Element.SliderAnimateImg>
        <img src='/images/home-animation-image1.png' />
      </Element.SliderAnimateImg>
      <Element.SliderAnimateDown>
        <img src='/images/home-animation-image1.png' />
      </Element.SliderAnimateDown>
      <Element.SliderInner>
        <GridContainer>
          <Element.SliderRow className='row'>
            <GridItem xl={6} lg={6} md={6} sm={12}>
              <Element.SliderInformation>
                <Element.SliderInforTitle>
                  NFT Market - Explore, Buy & Sell Digital Items
                </Element.SliderInforTitle>
                <Element.EmBar>
                  <Element.EmBarBg></Element.EmBarBg>
                </Element.EmBar>
                <Element.Description>
                  Discover unique NFTs (Digital collectibles) list your items to sell,
                  buy other unique items like visual arts, games, video & music.
                </Element.Description>                
                <Element.SliderBtns>
                  <Element.OutlineBtn>
                    Discover NFTs
                  </Element.OutlineBtn>
                  <Element.SaleBtn>
                    Sell NFTs
                  </Element.SaleBtn>
                </Element.SliderBtns>
              </Element.SliderInformation>
            </GridItem>
            <GridItem xl={6} lg={6} md={6} sm={12}>
              <Element.SliderImages>
                <Element.SliderScreen>
                  <img src='/images/screen.png' alt='Screen' />
                </Element.SliderScreen>
                <Element.SliderArtScreen>
                  <Element.SliderItemZero>
                    <img src='/images/screen1.png' alt='Screen' />
                  </Element.SliderItemZero>
                  <Element.SliderItemOne>
                    <img src='/images/screen2.png' />
                  </Element.SliderItemOne>
                  <Element.SliderItemTwo>
                    <img src='/images/screen3.png' />
                  </Element.SliderItemTwo>
                  <Element.SliderItemThree>
                    <img src='/images/screen4.png' />
                  </Element.SliderItemThree>
                  <Element.SliderItemFour>
                    <img src='/images/screen5.png' />
                  </Element.SliderItemFour>
                </Element.SliderArtScreen>
                <img src='/images/computer.png' alt='Computer' />
              </Element.SliderImages>
              <Element.SliderResponsiveScreen>
                <img src='/images/slide-image.png' alt="Slider Image" />
              </Element.SliderResponsiveScreen>
            </GridItem>
          </Element.SliderRow>
        </GridContainer>
      </Element.SliderInner>

    </Element.SliderSection>
  )
}

export default Slider
