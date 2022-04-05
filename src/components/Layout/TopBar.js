import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'

import { connectorLocalStorageKey, injectedConnector, walletconnect, bscConnector } from "../../utils/connectors"
import * as S from "./styles";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

function TopBar(props) {
  const { account, active, deactivate } = useWeb3React();
  const [userProfile, setUserProfile] = useState(undefined)
  useEffect(() => {
    if (account) {
      axios.get(`/api/user/${account}`)
        .then(res => {
          setUserProfile(res.data.user)
        })
    }
  }, [account])

  const [showDropDown, setShowDropDown] = useState(false)
  const [openDrop, setOpenDrop] = useState(false)

  function signOut() {
    setShowDropDown(false);
    deactivate(injectedConnector)
    deactivate(walletconnect)
    deactivate(bscConnector)
    window.localStorage.setItem(connectorLocalStorageKey, "");
  }

  return (
    <React.Fragment>
      <S.SiteHeader>
        <S.Container>
          <div className="headerWrap">
            <div className="headerLogo">
              <Link to="/">
                <S.HeaderLogo>
                  <S.LogoImage src={"/images/logo.png"} alt={"logo"} />
                  <S.HeaderLogoLabel>Zono NFT</S.HeaderLogoLabel>
                  <S.HeaderNFT>Marketplace</S.HeaderNFT>
                </S.HeaderLogo>
              </Link>
            </div>
            <div
              className="menutriggerButton"
              onClick={() => setOpenDrop(true)}
            >
              <div className="menuTrigger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
            <div className="headerMenu">
              <div className="innerWrap">
                <div className="col col-1">
                  <Link to="/" className="cta-button">
                    Marketplace
                  </Link>
                  <a href={"https://zonoswap.com/swap#/swap?outputCurrency=0xAc97796B45F9627e16da9C93e608579ceEb410a4"}
                    rel="noopener noreferrer" target="_blank" className="cta-button">
                    Buy Zono
                  </a>
                </div>
                <div className="col col-2">
                  <S.HeaderRight>
                    {account ? (
                      <>
                        <div className="cta-button" onClick={() => props.history.push('/create')}>
                          Create
                        </div>
                        <div className="cta-button" onClick={() => props.history.push('/mint')}>
                          Mint
                        </div>
                        <S.AccountCircleBtn src={userProfile && userProfile.profilePic ? userProfile.profilePic : "https://ipfs.io/ipfs/QmaxQGhY772ffG7dZpGsVoUWcdSpEV1APru95icXKmii67"}
                          onClick={() => setShowDropDown(!showDropDown)} />
                      </>
                    ) : (
                      <div className="cta-button" onClick={active ? null : props.connectAccount}>Connect Wallet</div>
                    )}
                    {showDropDown && (
                      <S.DropDownMenus>
                        <S.DropDownMenu
                          onClick={() => { props.history.push(`/profile/${account}`); setShowDropDown(false) }}>
                          My items
                        </S.DropDownMenu>
                        <S.DropDownMenu
                          onClick={() => { props.history.push('/edit_profile'); setShowDropDown(false) }}>
                          Edit profile
                        </S.DropDownMenu>
                        <S.DropDownMenu
                          onClick={() => { signOut() }}>
                          Disconnect Wallet
                        </S.DropDownMenu>
                      </S.DropDownMenus>
                    )}
                  </S.HeaderRight>
                  <S.DropButton onClick={() => { setOpenDrop(true) }} className={openDrop ? "display-none" : ""}>
                    <span className="bg-black rounded" />
                    <span className="bg-black rounded middle" />
                    <span className="bg-black rounded" />
                  </S.DropButton>
                </div>
              </div>
            </div>
          </div>
        </S.Container>
        {
          openDrop &&
          <Sidebar {...props} account={account} signOut={signOut} closeMini={() => setOpenDrop(false)} />
        }
      </S.SiteHeader>
    </React.Fragment>
  );

}

export default TopBar;
