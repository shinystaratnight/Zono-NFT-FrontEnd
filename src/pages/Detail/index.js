/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import Querystring from 'query-string'
import DatePicker from 'react-datepicker'

import CircularProgress from '@material-ui/core/CircularProgress';

import { getTokenBalance, listItem, delistItem, buy, createAuction, finalizeAuction, bidOnAuction } from "utils/contracts";
import { formatNum } from "utils";
import History from "./history";
import Provenance from "./provenance";
import DetailActions from './DetailActions'

import { GridContainer, GridRow, GridItem } from 'components/Grid'
import CustomButton from 'components/CustomButton'
import CustomSnackbar from 'components/CustomSnackbar'
import * as Element from "./styles";
import ModalBox from './modal'
import "react-datepicker/dist/react-datepicker.css";

function Detail(props) {	

	const base_url = process.env.REACT_APP_BASE_URL;
	console.log("BASE: ", base_url);
	const { collection, id } = useParams();
	const [item, setItem] = useState(null)
	const { account, chainId, library } = useWeb3React();
	const [balance, setBalance] = useState(0)
	const [snackBarMessage, setSnackBarMessage] = useState("")
	const [openSnackbar, setOpenSnackbar] = useState(false)

	useEffect(() => {
		if (!!account && !!library) {
			getTokenBalance(account, chainId, library.getSigner())
				.then((balance) => {
					setBalance(balance)
				})
				.catch(() => {
					setBalance(0)
				})
		}
		return () => {
			setBalance(0)
		}
	}, [account, chainId, library])

	const [localLikeCount, setLocalLikeCount] = useState(0)
	const [didLike, setDidLike] = useState(false)
	const [isLiking, setIsLiking] = useState(false)

	const [curTab, setCurTab] = useState('provenance')

	const [showPlaceBidModal, setShowPlaceBidModal] = useState(false)
	const [showBuyNowModal, setShowBuyNowModal] = useState(false)
	const [showEndAuction, setShowEndAuction] = useState(false)
	const [showUnlistMarketPlace, setShowUnlistMarketPlace] = useState(false)
	const [showPutMarketPlace, setShowPutMarketPlace] = useState(false)

	const [auctionStatus, setAuctionStatus] = useState(false)
	const [auctionStatusMessage, setAuctionStatusMessage] = useState('')
	const [state, setState] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});


	const [bidPrice, setBidPrice] = useState(0)

	const [putType, setPutType] = useState('fixed')
	const [putPrice, setPutPrice] = useState(0)

	const [startType, setStartType] = useState('now')
	const [startDate, setStartDate] = useState(null)
	const [endType, setEndType] = useState('1')
	const [endDate, setEndDate] = useState(null)

	const [listingStatus, setListingStatus] = useState(false);
	const [delistingStatus, setDelistingStatus] = useState(false);
	const [buyingStatus, setBuyingStatus] = useState(false);
	const [creatingAuctionStatus, setCreatingAuctionStatus] = useState(false);
	const [endingAuctionStatus, setEndingAuctionStatus] = useState(false);
	const [biddingStatus, setBiddingStatus] = useState(false);

	function fetchItem() {
		axios.get(`/api/item/${collection}/${id}`)
			.then(res => {
				setItem(res.data.item)
			})
			.catch(() => {
				//show an error page that the item doesnt exist
				setItem(undefined)
			})
	}
	useEffect(() => {
		if (!item) {
			fetchItem();
		}
	}, [item])

	useEffect(() => {
		if (item) {
			setLocalLikeCount(item.likes ? item.likes.length : 0)
			if (props.user) {
				setDidLike(item.likes && item.likes.includes(props.user.address.toLowerCase()))
			}
		}
	}, [item, props.user])

	useEffect(() => {
		if (item?.auction) setInterval(() => setNewTime(), 1000);
	}, [item]);

	const setNewTime = () => {
		const currentTimestamp = new Date().getTime()
		let countdownDate = 0;
		if (item.auction.startTime * 1000 > currentTimestamp) {
			setAuctionStatus(false)
			countdownDate = item.auction.startTime * 1000;
			setAuctionStatusMessage('Auction starts in')

		} else if (item.auction.endTime * 1000 > currentTimestamp) {
			setAuctionStatus(true)
			countdownDate = item.auction.endTime * 1000;
			setAuctionStatusMessage('Ends in')
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
		} else {
			setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
		}
	};

	function clickFavorite() {
		if (props.user) {
			if (!isLiking) {
				setIsLiking(true)
				setLocalLikeCount(l => l + (didLike ? -1 : 1))
				setDidLike(i => !i)
				axios.post("/api/item/like", Querystring.stringify({ address: props.user.address.toLowerCase(), tokenId: item.tokenId, collection: item.itemCollection }))
					.then(() => {
						setIsLiking(false)
					})
					.catch(() => {
						setIsLiking(false)
					})
			}
		}
	}

	const handleCloseDialog = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpenSnackbar(false);
	};

	function putOnMarketPlace() {
		if (putType === 'fixed') {
			putFixed()
		} else if (putType === 'timed') {
			putAuction()
		}
	}

	function putFixed() {
		if (putPrice <= 0) {
			setSnackBarMessage("Please input price correctly!")
			setOpenSnackbar(true)
			return
		}
		setListingStatus(true)

		listItem(
			item.itemCollection,
			account,
			item.tokenId,
			putPrice,
			chainId,
			library.getSigner()
		).then((result) => {
			if (result) {
				setListingStatus(false);
				setShowPutMarketPlace(false)
				setSnackBarMessage("Success");
				setOpenSnackbar(true);
				props.history.push(`/profile/${account}`)
				return true;
			} else {
				setListingStatus(false);
				setSnackBarMessage("Failed Transaction");
				setOpenSnackbar(true);
			}
		});

	}

	function unlistItem() {
		setDelistingStatus(true)

		delistItem(
			item.pair.id,
			chainId,
			library.getSigner()
		).then((result) => {
			if (result) {
				setDelistingStatus(false);
				setShowUnlistMarketPlace(false)
				setSnackBarMessage("Success");
				setOpenSnackbar(true);
				props.history.push(`/profile/${account}`)
				return true;
			} else {
				setDelistingStatus(false);
				setSnackBarMessage("Failed Transaction");
				setOpenSnackbar(true);
			}
		});


	}

	function buyItem() {
		if (balance < item.pair.price) {
			setShowBuyNowModal(false)
			setSnackBarMessage("Your available balance is less than the price!")
			setOpenSnackbar(true)
			return
		}
		setBuyingStatus(true)

		buy(
			account,
			item.pair.id,
			item.pair.price,
			chainId,
			library.getSigner()
		).then((result) => {
			if (result) {
				setBuyingStatus(false);
				setShowBuyNowModal(false)
				setSnackBarMessage("Success");
				setOpenSnackbar(true);
				props.history.push(`/profile/${account}`)
				return true;
			} else {
				setBuyingStatus(false);
				setSnackBarMessage("Failed Transaction");
				setOpenSnackbar(true);
			}
		});
	}

	function putAuction() {
		if (putPrice <= 0) {
			setSnackBarMessage("Please input price correctly!")
			setOpenSnackbar(true)
			return
		}
		const currentTime = new Date().getTime()

		let startTimeStamp = 0
		if (startType === 'specific') {
			if (!startDate) {
				setSnackBarMessage("Please select start time.")
				setOpenSnackbar(true)
				return
			}
			const startTime = startDate.getTime()
			if (currentTime >= startTime) {
				setSnackBarMessage("The start time must be after the current time.")
				setOpenSnackbar(true)
				return
			}
			startTimeStamp = Math.floor(startTime / 1000)
		} else {
			startTimeStamp = Math.floor(currentTime / 1000)
		}
		console.log("startTimeStamp")
		console.log(startTimeStamp)

		let endTimeStamp = 0
		if (endType === 'specific') {
			if (!endDate) {
				setSnackBarMessage("Please select end time.")
				setOpenSnackbar(true)
				return
			}
			const endTime = endDate.getTime()
			endTimeStamp = Math.floor(endTime / 1000)
			if (currentTime >= endTime) {
				setSnackBarMessage("The end time must be after the current time.")
				setOpenSnackbar(true)
				return
			}
			if (startTimeStamp >= endTimeStamp) {
				setSnackBarMessage("The end time must be after the start time.")
				setOpenSnackbar(true)
				return
			}
		} else {
			const later = Number(endType)
			endTimeStamp = startTimeStamp + 86400 * later
		}
		console.log("endTimeStamp")
		console.log(endTimeStamp)


		setCreatingAuctionStatus(true)
		createAuction(
			item.itemCollection,
			account,
			item.tokenId,
			putPrice,
			startTimeStamp,
			endTimeStamp,
			chainId,
			library.getSigner()
		).then((result) => {
			if (result) {
				setCreatingAuctionStatus(false);
				setShowPutMarketPlace(false)
				setSnackBarMessage("Success");
				setOpenSnackbar(true);
				props.history.push(`/profile/${account}`)
				return true;
			} else {
				setCreatingAuctionStatus(false);
				setSnackBarMessage("Failed Transaction");
				setOpenSnackbar(true);
			}
		});
	}

	function endAuction() {
		setEndingAuctionStatus(true)

		finalizeAuction(
			item.auction.id,
			chainId,
			library.getSigner()
		).then((result) => {
			if (result) {
				setEndingAuctionStatus(false);
				setShowEndAuction(false)
				setSnackBarMessage("Success");
				setOpenSnackbar(true);
				props.history.push(`/profile/${account}`)
				return true;
			} else {
				setEndingAuctionStatus(false);
				setSnackBarMessage("Failed Transaction");
				setOpenSnackbar(true);
			}
		});

	}

	function placeBid() {

		if (!(item?.auction.bids) && (bidPrice - item.auction.price < 0)) {
			setSnackBarMessage("Your bid must be higher than minimum bid price!")
			setOpenSnackbar(true)
			return
		}

		if ((item?.auction.bids?.length > 0) && (bidPrice - item.auction.price * 1.05 <= 0)) {
			setSnackBarMessage("Your bid must be 5% higher than current bid!")
			setOpenSnackbar(true)
			return
		}

		if (balance - bidPrice < 0) {
			setSnackBarMessage("Your available balance is less than the bid price!")
			setOpenSnackbar(true)
			return
		}


		setBiddingStatus(true)

		bidOnAuction(
			account,
			item.auction.id,
			bidPrice,
			chainId,
			library.getSigner()
		).then((result) => {
			if (result) {
				setBiddingStatus(false);
				closePlaceBidModal()
				setSnackBarMessage("Success");
				setOpenSnackbar(true);
				fetchItem()
				return true;
			} else {
				setBiddingStatus(false);
				setSnackBarMessage("Failed Transaction");
				setOpenSnackbar(true);
			}
		});

	}

	function closePlaceBidModal() {
		setShowPlaceBidModal(false)
		setBidPrice(0)
	}

	return (
		<Element.Wrapper>
			<GridContainer>
				<GridRow>
					<GridItem xl={7} lg={7} md={6} sm={12}>
						<Element.ImageContainer>
							<Element.ImageContent>
								<Element.NftImage src={item?.image} />
							</Element.ImageContent>
							<Element.AddressContainer>
								<Element.label>Contract Address</Element.label>
								<Element.Address>
									<Element.NftAddress
										href={`https://bscscan.com/address/${item?.itemCollection}`}
										target={"_blank"}>{item?.itemCollection}</Element.NftAddress>
									<Element.NftNetwork>BSC</Element.NftNetwork>
								</Element.Address>
							</Element.AddressContainer>
							<Element.TokenIdContainer>
								<Element.label>Token ID</Element.label>
								<Element.TokenId>{item?.tokenId}</Element.TokenId>
							</Element.TokenIdContainer>
						</Element.ImageContainer>
					</GridItem>

					<GridItem xl={5} lg={5} md={6} sm={12}>
						<Element.DetailContainer>
							<Element.Header>
								<Element.HeaderLeft>
									<Element.NftTitle>{item?.name}</Element.NftTitle>
								</Element.HeaderLeft>
								<Element.HeaderRight>
									<DetailActions
										didLike={didLike}
										clickFavorite={clickFavorite}
										localLikeCount={localLikeCount}
									/>
								</Element.HeaderRight>
							</Element.Header>
							<Element.OwnerContainer>
								<Element.Caption>
									{item?.description}
								</Element.Caption>
								<Element.Owners>
									<Element.UserOptionText>Owner</Element.UserOptionText>
									<Element.Owner>
										<Element.CreatorImage
											src={item?.ownerUser.profilePic}
											onClick={() => props.history.push(`/profile/${item?.ownerUser.address}`)}
										/>
										<Element.CreatorContent>
											<Element.CreatorName>{item?.ownerUser.name}</Element.CreatorName>
										</Element.CreatorContent>
									</Element.Owner>
								</Element.Owners>
							</Element.OwnerContainer>
							{
								item?.auction ?
									<Element.StatusContainer>
										<Element.CurrentBid>
											<Element.OptionText>Current Bid</Element.OptionText>
											<Element.OptionContent>
												<Element.PriceContainer>
													<Element.CoinImage src={"/images/logo.png"} />
													<Element.Price>{formatNum(item?.auction?.price)}</Element.Price>
													<Element.Unit>{process.env.REACT_APP_TOKEN}</Element.Unit>
												</Element.PriceContainer>
											</Element.OptionContent>
										</Element.CurrentBid>
										<Element.BidTime>
											<Element.OptionText>{auctionStatusMessage}</Element.OptionText>
											<Element.Times>
												<Element.Time>
													<Element.TimeValue>{state.days || '00'}</Element.TimeValue>
												</Element.Time>
												<Element.Time>
													<Element.TimeValue>{state.hours || '00'}</Element.TimeValue>
												</Element.Time>
												<Element.Time>
													<Element.TimeValue>{state.minutes || '00'}</Element.TimeValue>
												</Element.Time>
												<Element.Time>
													<Element.TimeValue>{state.seconds || '00'}</Element.TimeValue>
												</Element.Time>
											</Element.Times>
										</Element.BidTime>
									</Element.StatusContainer>
									:
									item?.pair ?
										<Element.StatusContainer>
											<Element.CurrentBid>
												<Element.OptionText>Price</Element.OptionText>
												<Element.OptionContent>
													<Element.PriceContainer>
														<Element.CoinImage src={"/images/logo.png"} />
														<Element.Price>{formatNum(item?.pair?.price)}</Element.Price>
														<Element.Unit>{process.env.REACT_APP_TOKEN}</Element.Unit>
													</Element.PriceContainer>

												</Element.OptionContent>
											</Element.CurrentBid>
										</Element.StatusContainer>
										:
										<Element.StatusContainer>
											<Element.CurrentBid>
												<Element.OptionText>Not for sale</Element.OptionText>
											</Element.CurrentBid>
										</Element.StatusContainer>
							}
							<Element.ActionContainer>
								{
									item && props.user ?
										<>
											{item.ownerUser.address.toLowerCase() === props.user.address.toLowerCase() ?
												<>
													<CustomButton style={{ display: item?.auction || item?.pair ? "none" : "" }} onClick={() => setShowPutMarketPlace(true)}>Put on marketplace</CustomButton>
													<CustomButton style={{ display: item?.auction ? "" : "none" }} onClick={() => setShowEndAuction(true)}>End Auction</CustomButton>
													<CustomButton style={{ display: item?.pair ? "" : "none" }} onClick={() => setShowUnlistMarketPlace(true)}>Unlist on marketplace</CustomButton>
												</>
												:
												<>
													<CustomButton style={{ display: item?.auction && auctionStatus ? "" : "none" }} onClick={() => setShowPlaceBidModal(true)}>Place a Bid</CustomButton>
													<CustomButton style={{ display: item?.pair ? "" : "none" }} onClick={() => setShowBuyNowModal(true)}>Buy Now</CustomButton>
												</>
											}
										</>
										: <></>
								}
							</Element.ActionContainer>

							<Element.Others>
								<Element.TabHeader>
									<Element.Tab style={{ display: item?.auction ? "" : "none" }} onClick={() => setCurTab('bid_history')} className={curTab === 'bid_history' ? 'active' : ''}>Bids</Element.Tab>
									<Element.Tab onClick={() => setCurTab('provenance')} className={curTab === 'provenance' ? 'active' : ''}>Activities</Element.Tab>
								</Element.TabHeader>
								<Element.TabContent>
									{
										curTab === 'bid_history' &&
										<Element.TabContentContainer>
											<Element.InfoList>
												{
													item?.auction.bids?.map((bid, index) => <History key={index} {...props} bid={bid} />)
												}
											</Element.InfoList>
										</Element.TabContentContainer>
									}
									{
										curTab === 'provenance' &&
										<Element.TabContentContainer>
											<Element.InfoList>
												{
													item?.events.map((event, index) => <Provenance key={index} {...props} event={event} />)
												}
											</Element.InfoList>
										</Element.TabContentContainer>
									}
								</Element.TabContent>
							</Element.Others>
						</Element.DetailContainer>
					</GridItem>

					<ModalBox
						open={showPlaceBidModal}
						handleClose={closePlaceBidModal}
					>
						<Element.ModalHeader>
							<Element.ModalCloseIcon size={32} onClick={() => closePlaceBidModal()} />
						</Element.ModalHeader>
						<Element.ModalTitle>Your Bid</Element.ModalTitle>
						<Element.ModalRow>
							<Element.ModalLabel>Current bid</Element.ModalLabel>
							<Element.ModalPrice>{formatNum(item?.auction?.price)} {process.env.REACT_APP_TOKEN}</Element.ModalPrice>
						</Element.ModalRow>
						<Element.BidPrice>
							<Element.ModalLabel>Your bid</Element.ModalLabel>
							<Element.ModalMainPrice type={"number"} value={bidPrice} onChange={event => setBidPrice(event.target.value)} />
							<Element.UnitContainer>
								<Element.CoinImage src={"/images/logo.png"} />
								<Element.Unit>{process.env.REACT_APP_TOKEN}</Element.Unit>
							</Element.UnitContainer>
						</Element.BidPrice>
						<Element.ModalRow>
							<Element.ModalLabel>Available</Element.ModalLabel>
							<Element.ModalPrice>{formatNum(balance)} {process.env.REACT_APP_TOKEN}</Element.ModalPrice>
						</Element.ModalRow>
						<Element.ModalAction>
							<Element.ModalButton onClick={() => placeBid()}>
								{
									biddingStatus ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "Place a Bid"
								}
							</Element.ModalButton>
						</Element.ModalAction>
					</ModalBox>

					<ModalBox
						open={showBuyNowModal}
						handleClose={() => setShowBuyNowModal(false)}
					>
						<Element.ModalHeader>
							<Element.ModalCloseIcon size={32} onClick={() => setShowBuyNowModal(false)} />
						</Element.ModalHeader>
						<Element.ModalTitle>
							<Element.ModalLabel>You will pay</Element.ModalLabel>
							<Element.PayAmount>
								<Element.CoinImage src={"/images/logo.png"} />
								<Element.Price>{formatNum(item?.pair?.price)}</Element.Price>
								<Element.Unit>{process.env.REACT_APP_TOKEN}</Element.Unit>
							</Element.PayAmount>

						</Element.ModalTitle>
						<Element.ModalRow>
							<Element.ModalLabel>Available</Element.ModalLabel>
							<Element.ModalPrice>{formatNum(balance)} {process.env.REACT_APP_TOKEN}</Element.ModalPrice>
						</Element.ModalRow>
						<Element.ModalActions>
							<Element.ModalCancelButton onClick={() => setShowBuyNowModal(false)}>Cancel</Element.ModalCancelButton>
							<Element.ModalSubmitButton onClick={() => buyItem()}>
								{
									buyingStatus ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "Confirm"
								}
							</Element.ModalSubmitButton>
						</Element.ModalActions>
					</ModalBox>

					<ModalBox
						open={showPutMarketPlace}
						handleClose={() => setShowPutMarketPlace(false)}
					>
						<Element.ModalHeader>
							<Element.ModalCloseIcon size={32} onClick={() => setShowPutMarketPlace(false)} />
						</Element.ModalHeader>
						<Element.ModalTitle>Put on Marketplace</Element.ModalTitle>
						<Element.PutTypes>
							<Element.PutType onClick={() => setPutType('fixed')} className={putType === 'fixed' ? 'active' : ''}>
								<Element.FixedIcon size={32} />
								<Element.TypeLabel>Fixed price</Element.TypeLabel>
							</Element.PutType>
							<Element.PutType onClick={() => setPutType('timed')} className={putType === 'timed' ? 'active' : ''}>
								<Element.TimeIcon size={36} />
								<Element.TypeLabel>Timed auction</Element.TypeLabel>
							</Element.PutType>
						</Element.PutTypes>
						{
							putType === 'fixed' &&
							<Element.Field>
								<Element.label>Price</Element.label>
								<Element.InputContainer>
									<Element.Input type={"number"} placeholder={"Enter Price"} value={putPrice} onChange={event => setPutPrice(event.target.value)} />
									<Element.InputUnit>{process.env.REACT_APP_TOKEN}</Element.InputUnit>
								</Element.InputContainer>
							</Element.Field>
						}
						{
							putType === 'timed' &&
							<>
								<Element.Field>
									<Element.label>Minimum bid</Element.label>
									<Element.InputContainer>
										<Element.Input type={"number"} placeholder={"Enter minimum bid"} value={putPrice} onChange={event => setPutPrice(event.target.value)} />
										<Element.InputUnit>{process.env.REACT_APP_TOKEN}</Element.InputUnit>
									</Element.InputContainer>

								</Element.Field>
								<Element.SelectRow>
									<Element.SelectField>
										<Element.label>Starting Date</Element.label>
										<Element.StartingDateSelect name={"starting_date"} defaultValue={startType} onChange={event => setStartType(event.target.value)}>
											<Element.OrderByOption value={"now"}>Right after listing</Element.OrderByOption>
											<Element.OrderByOption value={"specific"}>Pick specific date</Element.OrderByOption>
										</Element.StartingDateSelect>
										{
											startType === "specific" &&
											<DatePicker
												selected={startDate}
												onChange={value => setStartDate(value)}
												className={"input-picker"}
												showTimeSelect
												dateFormat="Pp"
											/>
										}
									</Element.SelectField>
									<Element.SelectField>
										<Element.label>Expiration Date</Element.label>
										<Element.StartingDateSelect name={"expiration_date"} defaultValue={endType} onChange={event => setEndType(event.target.value)}>
											<Element.OrderByOption value={"1"}>1 day</Element.OrderByOption>
											<Element.OrderByOption value={"3"}>3 days</Element.OrderByOption>
											<Element.OrderByOption value={"5"}>5 days</Element.OrderByOption>
											<Element.OrderByOption value={"7"}>7 days</Element.OrderByOption>
											<Element.OrderByOption value={"specific"}>Pick specific date</Element.OrderByOption>
										</Element.StartingDateSelect>
										{
											endType === "specific" &&
											<DatePicker
												selected={endDate}
												onChange={value => setEndDate(value)}
												className={"input-picker"}
												showTimeSelect
												dateFormat="Pp"
											/>
										}
									</Element.SelectField>
								</Element.SelectRow>
							</>
						}

						<Element.ModalActions>
							<Element.ModalCancelButton onClick={() => setShowPutMarketPlace(false)}>Cancel</Element.ModalCancelButton>
							<Element.ModalSubmitButton onClick={() => putOnMarketPlace()}>
								{
									listingStatus || creatingAuctionStatus ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "Confirm"
								}
							</Element.ModalSubmitButton>
						</Element.ModalActions>
					</ModalBox>

					<ModalBox
						open={showEndAuction}
						handleClose={() => setShowEndAuction(false)}
					>
						<Element.ModalHeader>
							<Element.ModalCloseIcon size={32} onClick={() => setShowEndAuction(false)} />
						</Element.ModalHeader>
						<Element.ModalTitle>
							End Auction
							<Element.PayAmount>
								<Element.Price>Are you sure you want to end this auction ?</Element.Price>
							</Element.PayAmount>
						</Element.ModalTitle>
						<Element.ModalActions>
							<Element.ModalCancelButton onClick={() => setShowEndAuction(false)}>Cancel</Element.ModalCancelButton>
							<Element.ModalSubmitButton onClick={() => endAuction()}>
								{
									endingAuctionStatus ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "End Auction"
								}
							</Element.ModalSubmitButton>
						</Element.ModalActions>
					</ModalBox>

					<ModalBox
						open={showUnlistMarketPlace}
						handleClose={() => setShowUnlistMarketPlace(false)}
					>
						<Element.ModalHeader>
							<Element.ModalCloseIcon size={32} onClick={() => setShowUnlistMarketPlace(false)} />
						</Element.ModalHeader>
						<Element.ModalTitle>
							Unlist Item
							<Element.PayAmount>
								<Element.Price>Are you sure you want to unlist this auction ?</Element.Price>
							</Element.PayAmount>
						</Element.ModalTitle>
						<Element.ModalActions>
							<Element.ModalCancelButton onClick={() => setShowUnlistMarketPlace(false)}>Cancel</Element.ModalCancelButton>
							<Element.ModalSubmitButton onClick={() => unlistItem()}>
								{
									delistingStatus ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "Unlist"
								}
							</Element.ModalSubmitButton>
						</Element.ModalActions>
					</ModalBox>				

					<CustomSnackbar
						open={openSnackbar}
						handleClose={handleCloseDialog}
						message={snackBarMessage}
					/>
				</GridRow>
			</GridContainer>
		</Element.Wrapper>
	);
}

export default Detail;
