import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  padding: 20px 0;
  background-color: white;
  border-bottom: 1px solid #f4f4f4;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: ${props => props.trigger ? '0 0 15px #ccc' : 'none'}
`
export const NavContents = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
export const HeaderLogo = styled.div`
  display: none;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-decoration: unset;
  display flex;
`;
export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  @media(max-width:767px){
    width: 40px;
    height: 40px;        
  }
`;
export const HeaderLogoLabel = styled.div`
  margin-left: 8px;
  color: var(--colorOrange);
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

export const HeaderNFT = styled.div`
  padding-left: 4px;
  color: #000;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
export const TriggerButton = styled.button`
  border: 0;
  cursor: pointer;
  background-color: white;
  color: var(--colorOrange);  
  margin-left: auto;
  display: none;
  svg {
    font-size: 2rem;
  }
  &:hover {
    color: #000;
  }
  @media screen and (max-width: 1199px) {
    display: inline-block;
  }
`
export const NavLinkList = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  a:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 1199px) {
    display: none;    
    transition: 0.5s;   
  }
`

export const NavLink = styled.a`
  padding: 10px 0;
  font-size: 17px;  
  cursor: pointer;
  color: ${props => props.active ? 'var(--colorOrange)' : '#222'};
  display: block;
  text-transform: capitalize;
  margin-right: 25px;
  &:hover {
    color: var(--colorOrange);  
  }
  transition: 0.3s;
`

export const CollapseWrapper = styled.div`
  display: none;
  position: absolute;
  left: 0px;
  width: 100%;
  top: 91px;
  border-bottom: 1px solid #eee;
  background-color: white;  
  @media screen and (max-width: 1199px) {
    display: block;   
  }
  @media screen and (max-width: 767px) {
    top: 81px;
  }
`

export const CollapseContent = styled.div`
  padding: 0 0 15px;
  
`
export const MobileNavLinkList = styled.ul`
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
`
export const BuyZonoLink = styled.a`
  padding: 10px 0;
  font-size: 17px;  
  color: #222;
  display: block;
  text-transform: capitalize;
  margin-right: 25px;
  &:hover {
    color: var(--colorOrange);  
  }
  transition: 0.3s;
`
