import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { ClockFill } from '@styled-icons/bootstrap/ClockFill'
import { Heart } from '@styled-icons/bootstrap/Heart'

export const NftCard = styled.div`
  margin-top: 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px;
  border-color: rgba(183, 183, 183, 0.2);
  position: relative;
  box-shadow: 0px 0px 15px rgb(238 238 238);
  transition: all 0.3s;
  z-index: 2;
  &:hover {
    transform: scale(1.03);
  }
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #fff;
    z-index: 2;
    border-radius: 10px 10px;
  }
`
export const CardMedia = styled.div`
  padding: 15px 15px;
  position: relative;
  z-index: 2;
  text-align: center;
`
export const CardImage = styled.img`
  border-radius: 8px 8px;
  width: 225px;
  height: 225px;
  object-fit: cover;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
`
export const NftOwner = styled.div`
  border-bottom: 1px solid rgb(238 238 238 / 80%);
  padding: 0px 15px 10px;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const OwnerAvatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 100%;
  border: 2px solid #fff;
  box-shadow: 0px 0px 8px #eee;
`
export const TokenTag = styled.span` 
  font-size: 10px;
  font-weight: 700;  
  text-transform: uppercase;  
`
export const NftInfo = styled.div`
  padding: 12px 15px 15px;
  position: relative;
  text-align: left;
  z-index: 2;
`
export const Title = styled.h3`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  margin: 0;
  line-height: 1.4;
  color: #222;
  text-transform: capitalize;
`
export const Price = styled.h4`
  font-size: 14px;
  margin: 8px 0px 4px;
  font-weight: 700;
  color: #222;
`
export const PriceToken = styled.span`
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 1px;
  vertical-align: middle;
  position: relative;
  top: -2px;
  display: inline-block;
  color: #808080;
  margin-left: 4px;
`
export const BidLink = styled(Link)`
  color: var(--colorOrange);
  font-weight: 800;
  font-size: 14px; 
`
export const NftTime = styled.div`
  position: absolute;
  bottom: 24px;
  left: 25px;  
  text-align: left;
  border: 1px solid #eee;
  background-color: #fff;
  color: #222;
  border-radius: 6px 6px;
  height: 30px;
  padding: 0 8px;
  display: flex;
  align-items: center;
`
export const TimeLabel = styled.span`
  color: #222;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  line-height: 1;
`
export const ClockIcon = styled(ClockFill)`
  width: 12px;
  height: 12px;
  margin-right: 4px;
`
export const LikeCount = styled.div`
  height: 36px;
  border-radius: 22px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
  transition: all 0.12s ease-in-out 0s;
  padding-top: 0;
  padding-bottom: 0;
  color: #212529; 
`
export const HeartIcon = styled(Heart)`
  width: 14px;  
  margin-right: 4px;
`
