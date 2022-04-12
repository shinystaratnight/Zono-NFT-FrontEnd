/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import CircularProgress from '@material-ui/core/CircularProgress';

import { GridItem } from 'components/Grid'
import CustomButton from 'components/CustomButton'
import CustomSnackbar from 'components/CustomSnackbar'
import * as Element from "./styles";
import { getCurrencyInfoFromSymbol, MINT_CONTRACTS } from "utils";
import { mintWithCoin1, getTokenBalance, getMintWithCoin1Price, getMintWithCoin1Supply } from "utils/contracts";

function MintWithCoin1(props) {

	const { account, chainId, library } = useWeb3React();
	const [balance, setBalance] = useState(0);
	const [price, setPrice] = useState(0);
	const [supply, setSupply] = useState(0);
    const [tokenSymbol, setTokenSymbol] = useState("");
    
	useEffect(() => {
		if (account && library) {
            const currency = MINT_CONTRACTS.MintWithCoin1.currency;
            setTokenSymbol(currency);
            const tokenAddr = getCurrencyInfoFromSymbol(currency).address;            
			getTokenBalance(account, tokenAddr, library)
				.then((tokenBalance) => {
					setBalance(tokenBalance)
				})
				.catch(() => {
					setBalance(0)
				})

            getMintWithCoin1Price(library.getSigner())
				.then((cost) => {
					setPrice(cost)
				})
				.catch(() => {
					setPrice(0)
				})

            getMintWithCoin1Supply(library.getSigner())
				.then((totalSupply) => {
					setSupply(totalSupply)
				})
				.catch(() => {
					setSupply(0)
				})
		}
		return () => {
			setBalance(0)
			setPrice(0)
			setSupply(0)
		}
	}, [account, chainId, library])


	const [snackBarMessage, setSnackBarMessage] = useState("")
	const [openSnackbar, setOpenSnackbar] = useState(false)

	const [numToken, setNumToken] = useState(0);
	const [maxNumToken, setMaxNumToken] = useState(20);
	const [mintingNFT, setMintingNFT] = useState(false);

	const increaseNumToken = () => {
		if (numToken < maxNumToken) setNumToken(numToken + 1);
	}
	const decreaseNumToken = () => {
		if (numToken > 0) setNumToken(numToken - 1);
	}

	const onMintItem = async () => {
		if (account && !mintingNFT) {
			if (!numToken) {
				setSnackBarMessage("You didn't set the number of nfts");
				setOpenSnackbar(true);
				return;
			}
			if (balance < price * numToken) {
				setSnackBarMessage("You don't have enough tokens");
				setOpenSnackbar(true);
				return;
			}
			setMintingNFT(true);
			mintWithCoin1(account, price, numToken, library.getSigner())
				.then(async (result) => {
					if (result) {
						setSnackBarMessage("Mint Success! Data will be updated after some blocks are confirmed.");
						setOpenSnackbar(true);
						props.history.push(`/profile/${account}`)
						setMintingNFT(false);
						return true;
					} else {
						setSnackBarMessage("Failed Transaction");
						setMintingNFT(false);
						setOpenSnackbar(true);
					}
				}).catch((err) => { })
		}

	}

	const handleCloseDialog = () => {
		setOpenSnackbar(false);
	};

	return (		
        <GridItem xl={4} lg={4} md={6} sm={12}>
            {
                account &&
                <Element.MintCard>
                    <Element.ImgSection>
                        <Element.ImgItem>
                            <Element.Img src="images/mint2.jpg" alt="animation1" />
                        </Element.ImgItem>
                    </Element.ImgSection>
                    <Element.Section>
                        <Element.InputSection>
                            <Element.InputContainer>
                                <Element.SpanItem style={{ paddingRight: 20 }} onClick={decreaseNumToken}>-</Element.SpanItem>
                                <Element.InputItem value={numToken} readOnly />
                                <Element.SpanItem style={{ paddingLeft: 20 }} onClick={increaseNumToken}>+</Element.SpanItem>
                            </Element.InputContainer>

                        </Element.InputSection>
                        <Element.InfosBox>
                            <Element.InfoLabel>Minted:</Element.InfoLabel>
                            <Element.InfoValue>
                                {supply} / 980
                            </Element.InfoValue>
                        </Element.InfosBox>
                        <Element.InfosBox>
                            <Element.InfoLabel>Mint Price:</Element.InfoLabel>
                            <Element.InfoValue>
                                {price.toLocaleString('en', { minimumFractionDigits: 0, maximumFractionDigits: 3 })} {tokenSymbol}
                            </Element.InfoValue>
                        </Element.InfosBox>
                        <Element.InfosBox>
                            <Element.InfoLabel>Total Cost:</Element.InfoLabel>
                            <Element.InfoValue>
                                {(price * numToken).toLocaleString('en', { minimumFractionDigits: 0, maximumFractionDigits: 3 })} {tokenSymbol}
                            </Element.InfoValue>
                        </Element.InfosBox>

                        <Element.ButtonSection>
                            <CustomButton size='medium' onClick={onMintItem}>
                                {
                                    mintingNFT ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "Mint Now"
                                }
                            </CustomButton>
                        </Element.ButtonSection>
                    </Element.Section>
                    <div>
                        <Element.ContractDiv>
                            <span>NFT Contract: </span>
                            <Element.ContractLink href={`https://bscscan.com/address/${MINT_CONTRACTS.MintWithCoin1.address}`} rel="noopener noreferrer" target="_blank">{MINT_CONTRACTS.MintWithCoin1.address}</Element.ContractLink>
                        </Element.ContractDiv>
                    </div>
                </Element.MintCard>
            }

            <CustomSnackbar
                open={openSnackbar}
                handleClose={handleCloseDialog}
                message={snackBarMessage}
            />
        </GridItem>		
	);

}

export default MintWithCoin1;

