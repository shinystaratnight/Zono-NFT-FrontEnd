import styled from 'styled-components';
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'

export const SliderSection = styled.div`
  background-image: url(/images/slider-bg.png);
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
  }
`
export const SliderInner = styled.div`  
  
`
export const SliderInformation = styled.div`
  max-width: 720px;
  margin: 0 auto 60px;
  @media screen and (max-width: 767px) {
    h1, p {
      text-align: center;
    }
  }
`
export const SliderInforTitle = styled.h1`
  font-size: 56px;
  letter-spacing: 2px;
  line-height: 1.3;
  color: #222;
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (max-width: 1600px) and (min-width: 1200px) {
    font-size: 42px;    
  }  
  @media screen and (max-width: 1199px) {
    font-size: 40px;
  }
  @media screen and (max-width: 767px) {
    font-size: 38px;    
  }
`
export const Description = styled.p`
  color: #616161;
  line-height: 1.6;
  margin: 0 0 25px;
  font-size: 16px;
`
export const SliderBtns = styled.div`
  button:first-child {
    margin-right: 16px;
  }
  @media screen and (max-width: 767px) {
    justify-content: center;
    display: flex;
  }
  @media screen and (max-width: 479px) {
    display: block;
  }
`
export const OutlineBtn = styled.button`
  background: transparent !important;
  border: 2px solid #eee;
  color: #222;
  font-size: 15px;
  padding: 13px 31px;
  border-radius: 5px;
  text-transform: uppercase;
  z-index: 1;
  transition: .9s;
  position: relative;
  letter-spacing: 1px;
  outline: 0 !important;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
    margin-bottom: 15px;
    margin-right: 0;
  }
`
export const SaleBtn = styled.button`
  border: 2px solid var(--colorOrange);
  background-color: var(--colorOrange);
  box-shadow: none;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 13px 31px;
  border-radius: 5px;
  text-transform: uppercase;
  z-index: 1;
  transition: .9s;
  display: inline-block;
  position: relative;
  letter-spacing: 1px;
  outline: 0 !important;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: 1199px) and (min-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
    margin-bottom: 15px;
  }
`
export const EmBar = styled.div`
  height: 2px;
  margin: ${props => props.margin ? props.margin : '0 0 25px'};
  width: 62px;
  @media screen and (max-width: 767px) {
    margin: 0 auto 25px;
  }
`
export const EmBarBg = styled.div`
  height: 5px;
  width: 90px;
  background: rgb(226 91 23 / 20%);
  margin: 20px 0;
  position: relative;
  border-radius: 30px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2.9px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: var(--colorOrange);
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: MOVE-BG;
  }
`
export const SliderResponsiveScreen = styled.div`
  display: none;
  @media screen and (max-width: 1600px) {
    height: 100%;
    display: flex;
    position: static;
    top: 320px;
    left: 120px;
    align-items: center;
  }
  img {
    @media screen and (max-width: 1600px) and (min-width: 1200px) {
      max-width: 400px;
    }
    @media screen and (max-width: 767px) {
      max-width: 428px;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (max-width: 575px) {
      max-width: 280px;
    }
  }
`
export const SliderImages = styled.div`
  position: absolute;
  top: 320px;
  left: 120px;
  @media screen and (max-width: 1600px) {
    display: none;
    position: absolute;
    top: 320px;
    left: 120px;
  }
`
export const SliderScreen = styled.div`
  position: absolute;
  top: -45px;
  left: -120px;
  animation: mover 1s infinite alternate;
  img {
    max-width: 245px;
  }
`
export const SliderArtScreen = styled.div`
  

`
export const SliderItemZero = styled.div`
  position: absolute;
  top: -156px;
  left: 60px;
  img {
    max-width: 140px;
    transition: all 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
export const SliderItemOne = styled.div`
  top: -210px;
  left: 220px;
  position: absolute;
  img {
    max-width: 172px;
    transition: all 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
export const SliderItemTwo = styled.div`
  top: -200px;
  left: 412px;
  position: absolute;
  img {
    max-width: 135px;
    transition: all 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
export const SliderItemThree = styled.div`
  top: -42px;
  left: 384px;
  position: absolute;
  img {
    max-width: 215px;
    max-width: 215px;
    transition: all 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
export const SliderItemFour = styled.div`
  top: 192px;
  left: 384px;
  position: absolute;
  img {
    max-width: 200px;
    transition: all 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
export const SliderAnimateImg = styled.div`
  position: absolute;
  top: 150px;
  left: -100px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SliderAnimateDown = styled.div`
  top: inherit;
  bottom: 60px;
  left: inherit;
  right: -100px;
  position: absolute;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SliderRow = styled.div`
  display: flex;
  height: calc(100vh - 76px);
  width: calc(100% - -15px);
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  align-items: center;
  & > div:last-child {
    height: 100%;
  }
  @media screen and (max-width: 1199px) {
    height: auto;
    padding: 30px 0;
  } 
`
export const LiveAuctionsSection = styled.div`
  padding: 120px 0;
  @media screen and (max-width: 991px) {
    padding: 60px 0;
  }
`
export const SectionTitleBox = styled.div`
  text-align: ${props => props.textAlign};
  span {
    margin-bottom: 0px;
    color: var(--colorOrange);
    letter-spacing: 5px;
    font-size: 18px;
    font-weight: 800;
    display: block;
  }
  h2 {
    font-size: 42px;
    text-transform: capitalize;
    margin-bottom: 15px;
    font-weight: 800;
    color: #222;
    position: relative;
    letter-spacing: .5px;
    line-height: 1.2;
    margin-top: 0;
  }
  .sub-title {
    font-size: 16px;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
    color: #777;
    line-height: 1.6;
    .token-info {
      font-size: 16px;
      font-weight: 400;
      max-width: 600px;
      margin: 0 auto;
      color: #777;
      line-height: 1.6;
      letter-spacing: 0.025em;
      text-transform: capitalize;
      margin: unset;
      display: inline-block;
    }
  }
  @media screen and (max-width: 1199px) {
    h2 {
      font-size: 34px;
    }
  }
  @media screen and (max-width: 575px) {
    h2 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 479px) {
    text-align: center;
  }
`
export const AboutSection = styled.div`
  background-color: rgb(239 242 247 / 40%);
  padding: 120px 0px;
  @media screen and (max-width: 991px) {
    padding: 60px 0px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 0px;
  }
`
export const EarnMainBox = styled.div`
  display: table;
  width: 100%;
  margin: 0px -15px;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin: 0px;
    display: flex;
  }
  @media screen and (max-width: 479px) {
    text-align: center;
  }
`
export const EarnAboutResponsive = styled.div`
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  text-align: center;
  @media screen and (min-width: 1601px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
    text-align: center;
    order: 1;
    width: 100%;
    display: block;
    img {
      max-width: 380px;
    }
  }
  @media screen and (max-width: 575px) {
    img {
      max-width: 280px!important;
    }
  }
`
export const EarnInfo = styled.div`
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  @media screen and (max-width: 767px) {
    order: 2;
    width: 100%;
    display: block;
  }
`
export const SingelAboutBox = styled.div`
  margin-top: 30px;
`
export const SingelAboutBoxItem = styled.div`
  margin-bottom: 20px;
  &::after {
    display: block;
    clear: both;
    content: "";
  }
`
export const SingelAboutBoxIcon = styled.div`
  height: 90px;
  width: 90px;
  line-height: 90px;
  font-size: 40px;
  color: #0c5adb;
  position: relative;
  text-align: center;
  box-shadow: 0 20px 50px 5px #eee;
  border-radius: 50%;
  z-index: 1;
  background: #fff;
  margin-right: 25px;
  float: left;
  img {
    max-width: 51px;
    vertical-align: middle;
    position: relative;
    top: -4px;
  }
  @media screen and (max-width: 479px) {
    float: none;
    margin: 0 auto 20px;
  }
`
export const SingelAboutBoxInfo = styled.div`
  width: calc(100% - 115px);
  float: left;
  h3 {
    margin: 0 0 12px;
    color: #222!important;
    margin-bottom: 8px!important;
    font-weight: 700!important;
    font-size: 20px!important;
  }
  p {
    margin: 0;
    margin-bottom: 20px;
    color: #777;
    font-size: 16px;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
    float: none;
  }
`
export const EarnAboutImages = styled.div`
  text-align: center;
  position: absolute;
  left: -140px;
  top: -50px;
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  img {
    max-width: 660px;
    vertical-align: middle;
  }
  @media screen and (max-width: 1600px) {
    display: none;
  }
`
export const AboutEthCoin = styled.div`
  position: absolute;
  top: 20px;
  left: 274px;
  img {
    max-width: 40px;
    animation: crescendo 1.5s alternate infinite ease-in;
    vertical-align: middle;
  }
`
export const MostViewedSection = styled.div`
  position: relative;
  background-color: rgb(239 239 239 / 35%);
  border-top: 1px solid #eee;
  padding: 120px 0px;
  @media screen and (max-width: 991px) {
    padding: 60px 0px;
  }
`
export const DigitalArtsSection = styled.div`
  padding: 120px 0px;
  @media screen and (max-width: 991px) {
    padding: 60px 0px;
  }
`
export const EarnImages = styled.div`
  text-align: center;
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  img {
    vertical-align: middle;
  }
  @media screen and (min-width: 1601px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
    text-align: center;
    order: 1;
    width: 100%;
    display: block;
    padding: 0px;
    img {
      max-width: 380px;
    }
  }
  @media screen and (max-width: 575px) {
    img {
      max-width: 280px!important;
    }    
  }
`
export const PlatformArtistImages = styled.div`
  text-align: center;
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  position: relative;
  left: 60px;
  & > img {
    max-width: 450px;
    vertical-align: middle;
  }
  @media screen and (max-width: 1600px) {
    display: none;
  }
`
export const PlatformArtistLeft = styled.div`
  position: absolute;
  left: -64px;
`
export const PlatformArtistBox = styled.div`
  text-align: center;
  img {
    max-width: 115px;
    transition: all 0.5s;
    vertical-align: middle;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
export const PlatformArtistCircle = styled.div`
  position: absolute;
  top: -50px;
  right: -150px;
  img {
    max-width: 250px;
    animation: rounds 1.5s alternate infinite ease-in;
    vertical-align: middle;
    text-align: center;
  }
`
export const BeginListingSection = styled.div`
  padding-bottom: 150px !important;
  padding-top: 150px;
  border-top: 1px solid #eee;
  @media screen and (max-width: 767px) {
    .sub-title {
      max-width: unset;
    }
    h2+div {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 479px) {
    h2+div {
      margin-left: auto;
    }   
  }
`
export const EarnBtn = styled.div`
  margin-top: 20px;
  button {
    width: auto !important
  }
`
export const ArrowrightIcon = styled(RightArrowAlt)`
  margin-left: 3px;
  width: 24px;
`
export const ListSellBox = styled.div`
  position: relative;
  left: -40px;
  text-align: center;
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  & > img {
    max-width: 340px;
    vertical-align: middle;
  }
  @media screen and (max-width: 1600px) {
    display: none;
  }
`
export const ListSellTopImg = styled.div`
  position: absolute;
  top: -75px;
  left: -35px;
  animation: mover 1s infinite alternate;
  text-align: center;
  img {
    max-width: 240px;
    vertical-align: middle;
  }
`
export const ListSellToken = styled.div`
  position: absolute;
  bottom: -40px;
  right: 5px;
  text-align: center;
  animation: mover 1s infinite alternate;
  img {
    max-width: 140px;
    vertical-align: middle;
  }
`
export const ListEarnImagesResponsive = styled.div`
  width: 50%;
  display: table-cell;
  vertical-align: middle;
  padding: 0 15px;
  img {
    vertical-align: middle;
  }
  @media screen and (min-width: 1601px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const GuidesAreaSection = styled.div`
  padding: 120px 0px;
  border-top: 1px solid #eee;
  @media screen and (max-width: 991px) {
    padding: 60px 0px;
  }
`
export const GuideBox = styled.div`
  margin-top: 60px;
  text-align: center!important;
`
export const GuideMedia = styled.div`
  margin-bottom: 30px;
  text-align: center!important;
  img {
    vertical-align: middle;
  }
`
export const GuideInfo = styled.div`
  text-align: center!important;
  h3 {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 700;
    margin: 0;   
    line-height: 1.4;
    color: #222;
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    color: #777;
    line-height: 1.6;
    margin: 0;
    font-weight: 400;
  }
  @media screen and (max-width: 479px) {
    h3 {
      font-size: 16px;
    }
  }
`
