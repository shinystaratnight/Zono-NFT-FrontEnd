import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import BootstrapTooltip from 'components/BootstrapTooltip'

import {
  NftCard,
  CardMedia,
  CardImage,
  NftOwner,
  OwnerAvatar,
  NftInfo,
  Title,
  Price,
  PriceToken,
  NftTime,
  TimeLabel,
  ClockIcon,
  HeartIcon,
  LikeCount
} from './styles'

import { formatNum, getCurrencyInfo } from "utils";

const NftGridCard = (props) => {

  const { item } = props

  const [auctionStatus, setAuctionStatus] = useState(false)
  const [auctionStatusMessage, setAuctionStatusMessage] = useState('')

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const setNewTime = useCallback(() => {
    const currentTimestamp = new Date().getTime()
    let countdownDate = 0;
    if (item.auction.startTime * 1000 > currentTimestamp) {
      setAuctionStatusMessage('Auction has not started')
      setAuctionStatus(false)
    } else if (item.auction.endTime * 1000 > currentTimestamp) {
      setAuctionStatus(true)
      countdownDate = item.auction.endTime * 1000;
      setAuctionStatusMessage('Auction is started')
    } else {
      setAuctionStatusMessage('Auction has ended')
      setAuctionStatus(false)
    }

    if (countdownDate) {
      const distanceToDate = countdownDate - currentTimestamp;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(days)) {
        days = `0${days}`;
      }
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      }
      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      }
      if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    }
  }, [item]);

  useEffect(() => {
    if (item?.auction) {
      const timerId = setInterval(() => setNewTime(), 1000);
      return () => clearInterval(timerId);
    }
  }, [setNewTime, item]);

  return (
    <NftCard>
      <CardMedia>
        <Link to={`/detail/${item.itemCollection}/${item.tokenId}`}>
          <CardImage src={item.image} loading="lazy" />
        </Link>
        {
          item.auction && (
            auctionStatus ? (
              <NftTime>
                <ClockIcon />
                <TimeLabel>{`${state.days || '00'}:${state.hours || '00'}:${state.minutes || '00'}:${state.seconds || '00'}`}</TimeLabel>
              </NftTime>
            ) : (
              auctionStatusMessage && (
                <NftTime>
                  <TimeLabel>{auctionStatusMessage}</TimeLabel>
                </NftTime>

              )
            )
          )
        }
      </CardMedia>
      <NftOwner>
        <BootstrapTooltip title={item.ownerUser?.name} placement="top">
          <Link to={`/profile/${item?.ownerUser.address}`}>
            <OwnerAvatar src={item.ownerUser?.profilePic} alt='Owner' />
          </Link>
        </BootstrapTooltip>
        <LikeCount>
          <HeartIcon /> {item.likeCount}
        </LikeCount>
      </NftOwner>
      <NftInfo>
        <Link to={`/detail/${item.itemCollection}/${item.tokenId}`}>
          <Title>
            {item.name}
          </Title>
        </Link>
        {
          item.auction && 
          <Price>
            {formatNum(item.auction.price)}
            <PriceToken>{getCurrencyInfo(item.auction.tokenAdr)?.symbol}</PriceToken>
          </Price>          
        }
        {
          item.pair && 
          <Price>
            {formatNum(item.pair.price)}
            <PriceToken>{getCurrencyInfo(item.pair.tokenAdr)?.symbol}</PriceToken>
          </Price>
          
        }        
      </NftInfo>
    </NftCard>
  )
}

export default NftGridCard
