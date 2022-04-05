import styled from 'styled-components';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';

export const Container = styled.div`
  background-color: white;
  position: fixed;
  height: 100%;
  z-index: 6;
  top: 0;
`;

export const Navbar = styled.div`
  margin: 0 auto;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  height: 100%;
  display: flex;
  width: 320px;
  background: #fcfcfc;
  z-index: 9999;
  @media (min-width: 768px){
    width: 320px;
    display flex;
  }
`;

export const CloseContainer = styled.div`
  text-align: right;
  width: 100%;
`;

export const CloseBtn = styled(CloseOutline)`
  color: #1E2026;
`;


export const HeaderLogo = styled.a`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    text-decoration: unset;
`;

export const LinkBuy = styled.a`
    color: #e24717;
    text-decoration: unset;
    margin-bottom: 32px;
    font-size: 14px;
`;

export const LogoImage = styled.img`
    width: 25px;
    height: 25px;
`;

export const HeaderLogoLabel = styled.div`
    margin-left: 8px;
    color: #e24717;
`;

export const HeaderNFT = styled.div`
    color: #1E2026;
`;

export const Menus = styled.div`
  flex-grow: 1;
  margin-top: 60px;
  `;

export const Bottom = styled.div`
  margin-bottom: 48px;

  div.farm--link {
    text-align: center;
    margin-bottom: 24px;
    a {
        color: #1E2026;
      text-decoration: underline;
    }
  }

  div.social--link img{
    with: 64px;
    height: 64px;
    padding: 0 8px;
  }
  `;

export const MenuContainer = styled.div`
  margin-bottom: 32px;
  cursor: pointer;
  `;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  `;

export const MenuIcon = styled.div`
  padding-right: 12px;
`;

export const MenuLabel = styled.div`
  color: #1E2026;
  font-size: 14px;
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubLabel = styled.div`
  margin-left: 32px;
  font-size: 12px;
  color: #ff4e91c4;
  align-items: flex-start;
  display: flex;

  span{
    font-size: 6px;
  }
`;
