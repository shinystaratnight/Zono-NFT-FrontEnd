/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/accessible-emoji */
import React , {useState,useEffect} from "react";

import TimerClock from '../../assets/images/timerClock.png';
import BidImageIcon from '../../assets/images/doggyface.png';
import { formatNum } from "../../utils";

function Nft(props) {
    const {item} = props;
    const [auctionStatus, setAuctionStatus] = useState(false)
    const [auctionStatusMessage, setAuctionStatusMessage] = useState('')
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

    useEffect(() => {
        if (item?.auction) setInterval(() => setNewTime(), 1000);
    }, [item]);

    const setNewTime = () => {
        const currentTimestamp = new Date().getTime()
        let countdownDate = 0;
        if(item.auction.startTime * 1000 > currentTimestamp) {
            setAuctionStatusMessage('Auction has not started')
            setAuctionStatus(false)
        } else if(item.auction.endTime * 1000 > currentTimestamp) {
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
    
          setState({ days: days, hours: hours,  minutes: minutes, seconds: seconds });
        }
    };

    function goDetail() {
        props.history.push(`/detail/${item.itemCollection}/${item.tokenId}`);
    }
    
    return(
        <div className="item-box">
            <div onClick={() => goDetail()}>
                <div className="cardBox">
                    <div className="img-box">
                        <span className="timer" style = {{display: item.auction ? "" : "none"}}>
                        {
                            auctionStatus ? 
                                <>
                                    <img src={TimerClock} alt="TimerClock" />
                                    {`${state.days || '00'}:${state.hours || '00'}:${state.minutes || '00'}:${state.seconds || '00'}`}
                                </>
                                : `${auctionStatusMessage}`
                        }
                        </span>
                        <img className="cardImage" src={item.image} alt="cardImage" />
                    </div>
                    <div className="info-box">
                        <div className="titleTag-box">
                            <h2>{item.name}</h2>
                            <span className="tag">{process.env.REACT_APP_TOKEN}</span>
                        </div>
                        {
                            (item.auction || item.pair) && 
                            <div className="price-box">
                                <span className="bid">{item.auction ? 'Current Bid' : 'Price'}</span>
                                <div className="price-wrap">
                                    <img src={BidImageIcon} alt="BidImageIcon" />
                                    <span className="price">
                                        <span>{item.auction ? formatNum(item.auction?.price) : formatNum(item.pair?.price)} {process.env.REACT_APP_TOKEN}</span>                                        
                                    </span>
                                </div>
                            </div>
                        }                        
                        <div className="creator-box">
                            <span className="col-1">Owner</span>
                            <span className="col-2" style={{cursor:'pointer'}} onClick={(event) => {
                                event.stopPropagation();
                                props.history.push(`/profile/${item?.ownerUser.address}`);
                            }}>
                                <img src={item.ownerUser?.profilePic} alt="CreatorIcon" /> {item.ownerUser?.name} 
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nft;
