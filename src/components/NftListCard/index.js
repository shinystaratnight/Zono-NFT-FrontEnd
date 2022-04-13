import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import {
  NftCard,
  CardContent,
  CardMedia,
  CardImage,
  NftInfo,
  Title,
  OwnerLabel,
  TimerSection,
  Timer,
  TimeList,
  TimeCell,
  TimeLabel,
  PriceSection,
  PriceLabel,
  PriceVale,
  DetailLink,
  AuctionStatus
} from './styles'

import { formatNum, getCurrencyInfo } from "utils";

const NftListCard = (props) => {

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
      <CardContent>
        <CardMedia>
          <Link to={`/detail/${item.itemCollection}/${item.tokenId}`}>
            <CardImage src={item.image} loading="lazy" />
          </Link>
        </CardMedia>
        <NftInfo>
          <Link to={`/detail/${item.itemCollection}/${item.tokenId}`}>
            <Title>
              {item.name}
            </Title>
          </Link>
          <OwnerLabel to={`/profile/${item?.ownerUser.address}`}>
            {`Owner : ${item.ownerUser?.name}`}
          </OwnerLabel>
          <TimerSection>
            {
              item.auction && (
                auctionStatus ? (
                  <Timer>
                    <TimeList>
                      <TimeCell>
                        <TimeLabel>{state.days || '00'}</TimeLabel>
                        Day
                      </TimeCell>
                      <TimeCell>
                        <TimeLabel>{state.hours || '00'}</TimeLabel>
                        Hour
                      </TimeCell>
                      <TimeCell>
                        <TimeLabel>{state.minutes || '00'}</TimeLabel>
                        Min
                      </TimeCell>
                      <TimeCell>
                        <TimeLabel>{state.seconds || '00'}</TimeLabel>
                        Sec
                      </TimeCell>
                    </TimeList>
                  </Timer>
                ) : (
                  <AuctionStatus>{auctionStatusMessage}</AuctionStatus>
                )
              )
            }
            {
              item.auction && 
              <PriceSection>
                <PriceLabel> Current Bid: </PriceLabel>
                <PriceVale>
                  {`${formatNum(item.auction.price)} ${getCurrencyInfo(item.auction.tokenAdr)?.symbol}`}
                </PriceVale>
              </PriceSection>
              
            }
            {
              item.pair && 
              <PriceSection>
                <PriceLabel> Price: </PriceLabel>
                <PriceVale>
                  {`${formatNum(item.pair.price)} ${getCurrencyInfo(item.pair.tokenAdr)?.symbol}`}
                </PriceVale>
              </PriceSection>              
            }
          </TimerSection>
          <div>
            <DetailLink to={`/detail/${item.itemCollection}/${item.tokenId}`}>
              {
                item.auction ? 'Place A Bid' : 'Buy Now'
              }
            </DetailLink>
          </div>
        </NftInfo>
      </CardContent>
    </NftCard>
  )
}

export default NftListCard
