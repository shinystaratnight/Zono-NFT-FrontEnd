import React from 'react'
import { useHistory } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'

import { GridContainer, GridItem } from 'components/Grid'
import * as Element from './styles'

const Slider = () => {

  const history = useHistory()
  const { account } = useWeb3React();

  return (
    <Element.SliderSection>
      <Element.SliderAnimateImg>
        <img src='/images/home-animation-image1.png' alt='Home' />
      </Element.SliderAnimateImg>
      <Element.SliderAnimateDown>
        <img src='/images/home-animation-image1.png' alt='Home' />
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
                  <Element.OutlineBtn onClick={() => history.push('/explore')}>
                    Discover NFTs
                  </Element.OutlineBtn>
                  {
                    account && (
                      <Element.SaleBtn onClick={() => history.push('/mint')}>
                        Mint NFTs
                      </Element.SaleBtn>
                    )
                  }
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
                    <img src='/images/screen2.png' alt='Screen' />
                  </Element.SliderItemOne>
                  <Element.SliderItemTwo>
                    <img src='/images/screen3.png' alt='Screen' />
                  </Element.SliderItemTwo>
                  <Element.SliderItemThree>
                    <img src='/images/screen4.png' alt='Screen' />
                  </Element.SliderItemThree>
                  <Element.SliderItemFour>
                    <img src='/images/screen5.png' alt='Screen' />
                  </Element.SliderItemFour>
                </Element.SliderArtScreen>
                <img src='/images/computer.png' alt='Computer' />
              </Element.SliderImages>
              <Element.SliderResponsiveScreen>
                <img src='/images/slide-image.png' alt="Slider_Image" />
              </Element.SliderResponsiveScreen>
            </GridItem>
          </Element.SliderRow>
        </GridContainer>
      </Element.SliderInner>

    </Element.SliderSection>
  )
}

export default Slider
