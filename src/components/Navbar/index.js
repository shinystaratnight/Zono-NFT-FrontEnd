import React, { useState, useEffect } from "react";
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import { Link, useLocation, useHistory } from "react-router-dom";

import { connectorLocalStorageKey, injectedConnector, walletconnect, bscConnector } from "utils/connectors"

import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import GridContainer from 'components/Grid/GridContainer'
import AccountButton from 'components/AccountButton'
import CollapseMenu from './CollapseMenu'

import {
  NavbarWrapper,
  HeaderLogo,
  LogoImage,
  HeaderLogoLabel,
  HeaderNFT,
  TriggerButton,
  NavContents,
  NavLinkList,
  NavLink
} from './styles'

const Navbar = (props) => {

  const { connectAccount, window } = props
  const location = useLocation()
  const history = useHistory()

  const { account, active, deactivate } = useWeb3React();

  const [openSidebar, setOpenSidebar] = useState(false)
  const [userProfile, setUserProfile] = useState(undefined)

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 90,
  });

  const signOut = () => {
    deactivate(injectedConnector)
    deactivate(walletconnect)
    deactivate(bscConnector)
    localStorage.setItem(connectorLocalStorageKey, "");
  }

  useEffect(() => {
    if (account) {
      axios.get(`/api/user/${account}`)
        .then(res => {
          setUserProfile(res.data.user)
        })
    }
  }, [account])

  return (
    <NavbarWrapper trigger={trigger}>
      <GridContainer>
        <NavContents>
          <Link to="/">
            <HeaderLogo>
              <LogoImage src='/images/logo.png' alt='Logo' />
              <HeaderLogoLabel>
                Zono NFT
              </HeaderLogoLabel>
              <HeaderNFT>Marketplace</HeaderNFT>
            </HeaderLogo>
          </Link>
          <TriggerButton onClick={() => setOpenSidebar(!openSidebar)}>
            <MenuIcon />
          </TriggerButton>

          <NavLinkList>
            <NavLink
              href='/explore'
              onClick={(e) => { e.preventDefault(); history.push('/explore') }}
              active={location.pathname === '/explore'}
            >
              Explore
            </NavLink>
            <NavLink
              href="https://zonoswap.com/swap#/swap?outputCurrency=0xAc97796B45F9627e16da9C93e608579ceEb410a4"
              target='_blank'
            >
              Buy Zono
            </NavLink>
            {
              account ? (
                <>
                  <NavLink
                    href='/create'
                    onClick={(e) => { e.preventDefault(); history.push('/create') }}
                    active={location.pathname === '/create'}
                  >
                    Create
                  </NavLink>
                  <NavLink
                    href='/mint'
                    onClick={(e) => { e.preventDefault(); history.push('/mint') }}
                    active={location.pathname === '/mint'}
                  >
                    Mint
                  </NavLink>
                  <NavLink
                    href={`/profile/${account}`}
                    onClick={(e) => { e.preventDefault(); history.push(`/profile/${account}`) }}
                    active={location.pathname.includes('/profile/')}
                  >
                    My items
                  </NavLink>
                  <AccountButton
                    account={account}
                    signOut={signOut}
                    avatar={userProfile && userProfile.profilePic ? userProfile.profilePic : "https://ipfs.io/ipfs/QmaxQGhY772ffG7dZpGsVoUWcdSpEV1APru95icXKmii67"}
                  />
                </>) : (
                <>
                  <NavLink
                    to='/'
                    onClick={(e) => {
                      e.preventDefault();
                      if (!active) {
                        connectAccount();
                      }
                    }}
                  >
                    Connect Wallet
                  </NavLink>
                </>)
            }
          </NavLinkList>

        </NavContents>
      </GridContainer>
      <CollapseMenu
        {...props}
        account={account}
        signOut={signOut}
        open={openSidebar}
        handleClose={() => setOpenSidebar(false)}
      />
    </NavbarWrapper>
  )
}

export default Navbar
