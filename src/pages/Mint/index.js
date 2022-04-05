/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import * as Element from "./styles";
import { mint, getTokenBalance, getMintPrice, getMintSupply } from "../../utils/contracts";

function Mint(props) {

    const { account, chainId, library } = useWeb3React();
    const [balance, setBalance] = useState(0);
    const [price, setPrice] = useState(0);
    const [supply, setSupply] = useState(0);
    useEffect(() => {
        if (account && library) {
            getTokenBalance(account, chainId, library.getSigner())
                .then((tokenBalance) => {
                    setBalance(tokenBalance)
                })
                .catch(() => {
                    setBalance(0)
                })

            getMintPrice(account, chainId, library.getSigner())
                .then((cost) => {
                    setPrice(cost)
                })
                .catch(() => {
                    setPrice(0)
                })

            getMintSupply(account, chainId, library.getSigner())
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
                alert("You didn't set the number of nfts");
                return;
            }
            if (balance < price * numToken) {
                alert("You don't have enough tokens");
                return;
            }
            setMintingNFT(true);
            mint(account, price, numToken, chainId, library.getSigner())
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

    const handleCloseDialog = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    return (
        <Element.Container style={{ paddingTop: '24px', paddingBottom: '3%' }}>
            {
                account &&
                <>
                    <Element.ImgSection>
                        <Element.ImgItem>
                            <img src="images/mint_preview.jpg" alt="animation1" style={{ borderRadius: "10px", width: '400px', height: '400px' }} />
                        </Element.ImgItem>
                    </Element.ImgSection>
                    <Element.Section>
                        <Element.InputSection>
                            <Element.InputText>Mint NFTs</Element.InputText>
                            <Element.InputContainer>
                                <Element.SpanItem style={{ paddingRight: 20 }} onClick={decreaseNumToken}>-</Element.SpanItem>
                                <Element.InputItem value={numToken} readOnly />
                                <Element.SpanItem style={{ paddingLeft: 20 }} onClick={increaseNumToken}>+</Element.SpanItem>
                            </Element.InputContainer>

                        </Element.InputSection>
                        <Element.InputText1>Minted: {supply} / 3,000</Element.InputText1>
                        <Element.InputText1>Mint Price: {price.toLocaleString('en', { maximumFractionDigits: 0 })} {process.env.REACT_APP_TOKEN}</Element.InputText1>
                        <Element.InputText1>Total Cost: {(price * numToken).toLocaleString('en', { maximumFractionDigits: 0 })} {process.env.REACT_APP_TOKEN}</Element.InputText1>
                        <Element.ButtonSection>
                            <Element.ButtonItem1 onClick={onMintItem}>
                                {
                                    mintingNFT ? <CircularProgress style={{ width: "16px", height: "16px", color: "white", }} /> : "Mint Now"
                                }
                            </Element.ButtonItem1>
                        </Element.ButtonSection>
                    </Element.Section>
                    <div>
                        <Element.ContractDiv>
                            <span>NFT Contract: </span>
                            <a href={"https://bscscan.com/address/0x6009E1302DBB61f4Cf82f6F03ab2cb986fb31c88"} rel="noopener noreferrer" target="_blank">0x6009E1302DBB61f4Cf82f6F03ab2cb986fb31c88</a>
                        </Element.ContractDiv>
                    </div>
                </>
            }

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseDialog}
                message={snackBarMessage}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseDialog}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </Element.Container>
    );

}

export default Mint;
