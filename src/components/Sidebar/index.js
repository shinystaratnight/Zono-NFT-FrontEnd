import React from 'react';
import * as S from './styles';
import Menu from "./Menu";

const Sidebar = ({history, closeMini, account, connectAccount, signOut}) => {

  return (
    <S.Container>
      <S.Navbar>
        <S.CloseContainer><S.CloseBtn size={30} onClick={() => (closeMini())}/></S.CloseContainer>
        <S.HeaderLogo href={"/"}>
          <S.LogoImage src={"/images/logo.png"} alt={"logo"}/>
          <S.HeaderLogoLabel>
            Zono
          </S.HeaderLogoLabel>
          <S.HeaderNFT>
            NFT Marketplace
          </S.HeaderNFT>
        </S.HeaderLogo>
        <S.Menus>
          <Menu onClick={() => {closeMini(); history.push('/'); }} label="MarketPlace" />
          <div style = {{marginBottom: '32px'}}>
            <S.LinkBuy href={"https://zonoswap.com/swap#/swap?outputCurrency=0xAc97796B45F9627e16da9C93e608579ceEb410a4"} target="_blank">Buy Zono</S.LinkBuy>
          </div>
          {
            account ?
              <>
                <Menu onClick={() => {closeMini(); history.push('/create');}} label="Create"/>
                <Menu onClick={() => {closeMini(); history.push('/mint');}} label="Mint"/>
                <Menu onClick={() => {closeMini(); history.push(`/profile/${account}`); }} label="My Items"/>
                <Menu onClick={() => {closeMini(); history.push('/edit_profile'); }} label="Edit Profile"/>
                <Menu onClick={() => {closeMini(); signOut();}} label="Sign out"/>
              </>
                :
            <Menu onClick={() => {closeMini(); connectAccount()}} label="Sign in" />
          }
        </S.Menus>
      </S.Navbar>
    </S.Container>
  );
};

export default Sidebar;
