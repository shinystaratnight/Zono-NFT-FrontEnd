/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as S from './styles';
import { formatNum, getCurrencyInfo } from "utils";

function History(props) {
	const { bid } = props;
	const [timeAgo, setTimeAgo] = useState('')
	
	useEffect(() => {
		setInterval(() => setNewTime(), 1000);
	}, [bid]);

	const setNewTime = () => {
		const currentTimestamp = new Date().getTime()
		const bidTimestamp = bid.timestamp * 1000;

		const distanceToDate = currentTimestamp - bidTimestamp;
		let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
		if (days > 0) {
			setTimeAgo(`${days} days ago`)
		} else if (hours > 0) {
			setTimeAgo(`${hours} hours ago`)
		} else if (minutes > 0) {
			setTimeAgo(`${minutes} minutes ago`)
		} else if (seconds > 0) {
			setTimeAgo(`${seconds} seconds ago`)
		}
	};
	function goUser() {
		props.history.push(`/profile/${bid.fromUser.address}`)
	}

	return (
		<S.HistoryContainer onClick={() => goUser()}>
			<S.BidderImage src={bid.fromUser.profilePic} />
			<S.BidderContent>
				<S.BidderName>{bid.fromUser.name} <span>placed a bid</span></S.BidderName>
				<S.BidTimeAgo>{timeAgo}</S.BidTimeAgo>
			</S.BidderContent>
			<S.BidAmount>
				<S.PriceContainer>					
					<S.HistoryPrice>{formatNum(bid.bidPrice)}</S.HistoryPrice>
					<S.HistoryUnit>{getCurrencyInfo(bid.tokenAdr)?.symbol}</S.HistoryUnit>
				</S.PriceContainer>
			</S.BidAmount>
		</S.HistoryContainer>
	);

};

export default History;
