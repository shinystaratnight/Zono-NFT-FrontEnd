import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ProfilePageWrap = styled.div`
  position: relative;
`;

export const ProfileBanner = styled.div`
  padding: 50px 0;  
`;

export const InnerWrap = styled.div`
  min-height: 200px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width: 1400px){
    min-height: 320px;
  }
  @media(max-width:1199px){
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }     
`

export const ProfileImg = styled.img`
  border-radius: 100px;
  margin-right: 30px;
  width:150px;
  @media screen and (max-width: 1199px) {
    margin-right: 0;
  }
`

export const ProfileBox = styled.div`
  display: flex;
  @media(max-width:1199px){
    display: block;
  }
`

export const UserName = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  margin-top: 10px;
  @media(max-width: 1400px){
    font-size: 35px;
  }
  @media(max-width: 1199px){
    margin-bottom: 10px;
  }
  @media(max-width: 767px){
    font-size: 27px;
  }
`
export const PinIdBox = styled.div`
  font-size:27px; 
  @media(max-width: 1400px){
    font-size: 20px;
  }
  @media(max-width: 767px){
    font-size: 16px;
  }
`

export const CopyButton = styled.span`
  padding: 6px;
  background-color:#fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 0 20px;
  cursor: pointer;
    @media(max-width: 767px){
      padding: 4px;
      img{
          width: 11px;
      }
  }
`

export const UidValue = styled.span`
  font-size: 27px;
`

export const BalanceValue = styled.span`
  color: white;
`

export const SettingLink = styled(Link)`
  background-color: var(--colorOrange);
  padding: 12px 45px;
  border:1px solid var(--colorOrange);
  border-radius: 100px;
  display: inline-block;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;  
  @media(max-width:767px){
    min-width: 200px;
  } 
  &:hover{
    background: #000 !important;
    text-decoration: none;
    border-color: #000 !important;
    outline: none !important;
  }
`

export const SettingBox = styled.div`
  flex: 1;
  text-align: right;
  @media(max-width:1199px){
    text-align: center;
    width: 100%;
  } 
`

export const ProfileContentBox = styled.div`
  width: 60%;
  @media(max-width:1199px){
    width: 100%;
    margin-bottom: 30px;
  }   
`

export const CardSection = styled.div`
  padding: 0px 0 120px;
`

export const SearchFormWrapper = styled.div`
  margin-top: 30px;
`

export const NftCardList = styled.div`
  
`

export const LoadingLabel = styled.div`
  padding: 12px 30px;
  border: 1px solid var(--colorOrange);
  border-radius: 100px;
  display: inline-block;
  color: #fff;
  transition: all 0.3s;
  background-color: var(--colorOrange);
  margin-left: auto;
  display: flex;
  width: fit-content;
  margin-right: auto;
  margin-top: 2rem;
`
export const TabContent = styled.div`

`
export const TabPane = styled.div`
  display: ${props => props.active ? 'block' : 'none'}
`

export const PaginationBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export const TabList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const TabLink = styled.div`
  font-size: 16px;
  color: ${props => props.active ? '#fff' : '#222'};
  cursor: pointer;
  transition: all 0.3s;
  padding: 12px 45px;
  border-radius: 100px;
  background-color: ${props => props.active ? 'var(--colorOrange)' : 'white'};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
