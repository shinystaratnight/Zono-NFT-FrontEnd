import React from 'react'
import { Link } from 'react-router-dom'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import {
  Wrapper,
  MainFooter,
  LogoImg,
  RightInfo,
  RightInfoText,
  SocialLinkList,
  SocialLink
} from './styles'

const Footer = () => {

  return (
    <Wrapper>
      <MainFooter>
        <GridContainer>
          <GridRow>
            <GridItem xl={2} lg={2} md={3} sm={4} xs={12}>
              <Link to='/'>
                <LogoImg src='/images/zonoswap-logo.png' alt='ZONOSWAP' />
              </Link>
            </GridItem>          
            <GridItem xl={10} lg={10} md={9} sm={8} xs={12}>
              <SocialLinkList>
                <SocialLink>
                  <a href='https://t.me/zonoswap' target='_blank' rel="noopener noreferrer">
                    <img src='/images/telegram.svg' alt='Telegram' />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href='https://twitter.com/ZonoSwap' target='_blank' rel="noopener noreferrer">
                    <img src='/images/twitter-icon.svg' alt='Twitter' />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href='https://www.instagram.com/zonoswap/' target='_blank' rel="noopener noreferrer">
                    <img src='/images/instagram-icon.svg' alt='Instagram' />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href='https://zonoswap.gitbook.io/zonoswap/' target='_blank' rel="noopener noreferrer">
                    <img src='/images/gitbook-icon.svg' alt='Gitbook' />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href='https://www.facebook.com/Zonoswap' target='_blank' rel="noopener noreferrer">
                    <img src='/images/facebook-icon.svg' alt='Facebook' />
                  </a>
                </SocialLink>
              </SocialLinkList>
            </GridItem>
          </GridRow>
        </GridContainer>
      </MainFooter>
      <RightInfo>
        <GridContainer>
          <GridRow>
            <GridItem xl={12} lg={12} md={12} sm={12} xs={12}>
              <RightInfoText>
                © 2021 ZonoSwap, All Rights Reserved
              </RightInfoText>
            </GridItem>
          </GridRow>
        </GridContainer>
      </RightInfo>
    </Wrapper>
  )
}

export default Footer
