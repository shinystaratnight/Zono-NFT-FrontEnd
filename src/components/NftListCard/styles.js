import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NftCard = styled.div`
  background-color: #fff;
  padding: 30px 30px;
  border: 1px solid #eaeff5;
  box-shadow: 0 4px 10px 0 rgb(41 128 185 / 7%);   
  border-radius: 6px;
  overflow: hidden;
  transition: .7s;
  position: relative;
  transition: .6s linear;
  margin-top: 30px;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 575px) {
    padding: 15px 15px;
  }
`
export const StoreLabel = styled.span`
  background-color: #f7f8f9;
  color: var(--colorOrange);
  display: inline-block;
  padding: 6px 20px;
  border-radius: 0 5px 0 5px;  
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
`
export const CardContent = styled.div`
  display: table;
  width: 100%;
  @media screen and (max-width: 575px) {
    display: block;
    width: 100%;
  }
`
export const CardMedia = styled.div`
  width: 220px;
  display: table-cell;
  vertical-align: top;
  @media screen and (max-width: 767px) and (min-width: 575px) {
    width: 180px;
  }
  @media screen and (max-width: 575px) {
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }
`
export const CardImage = styled.img`
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
  width: 100%;
`
export const NftInfo = styled.div`
  width: calc(100% - 220px);
  display: table-cell;
  vertical-align: top;
  padding-left: 20px;
  @media screen and (max-width: 767px) and (min-width: 575px) {
    width: calc(100% - 180px);
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 0;
  }
`
export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  margin: 0;  
  line-height: 1.4;
  color: #222;
  text-transform: capitalize;
`
export const OwnerLabel = styled(Link)`
  font-size: 15px;
  color: #888;
  margin-bottom: 15px;
  display: block;
  &:hover {
    // color: var(--colorOrange);
  }
`
export const TimerSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &::after {
    display: block;
    clear: both;
    content: "";
  }
`
export const Timer = styled.div`
  float: left;
  margin-right: 15px;
`
export const TimeList = styled.ul`
  margin-bottom: 15px;
  margin: 0;
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
  &::after {
    display: block;
    clear: both;
    content: "";
  }
`
export const TimeCell = styled.li`
  float: left;
  margin-right: 10px;
  font-size: 11px!important;
  color: #888!important;
  height: 45px;
  width: 60px;
  text-align: center;
  background-color: #f4f4f4;
  padding: 0!important;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 34px;
    margin-right: 4px;
  }
`
export const TimeLabel = styled.span`
  display: block;
  font-size: 16px;
  color: #222;
  font-weight: 600;
  margin-bottom: -4px;
  margin-top: 4px;
  line-height: 1.5;
`
export const PriceSection = styled.div`
  border-left: 1px solid #eaeff5;
  padding-left: 18px;
  margin-left: 5px;
  float: left;  
  margin-bottom: 15px;
`
export const PriceLabel = styled.p`
  font-size: 12px;
  color: #777;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
`
export const PriceVale = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: var(--colorOrange);
  margin: 0;
  line-height: 1.2;
`
export const DetailLink = styled(Link)`
  background-color: var(--colorOrange);
  color: #fff;
  text-align: center;
  padding: 8px 15px;
  font-size: 14px;
  border: 1px solid var(--colorOrange);
  text-transform: capitalize;
  border-radius: 5px;
  z-index:1;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  line-height: 1.5;
  font-weight: 700;
`
export const AuctionStatus = styled.div`
  float: left;
  margin-right: 15px;
`