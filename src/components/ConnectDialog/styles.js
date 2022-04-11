import styled from 'styled-components';

export const Paper = styled.div`
  outline: none !important;    
  background-color: rgba(0,0,0,.774);
  max-width: 20rem;
  position: relative;
  width: 95vw;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 5px #fff;
    .top-left {
      width: 4rem;
      height: 3rem;
    }
    .bottom-right {
      width: 4rem;
      height: 3rem;
    }
    .middle-border {
      width: 5rem;
    }
  }  
`

export const ModalHeader = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: 3px solid hsla(0,0%,100%,.6039215686274509);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.h1`
  color: #fff;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 3px #000;
  font-size: 1.5rem;
  padding-left: 20px;
  font-family: 'FightingSpirit';
`
export const WalletWrapper = styled.div`
  width: 90%;  
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
`
export const WalletItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  cursor: pointer;
  position: relative;
  z-index: 2;
`
export const WalletLogo = styled.div`
  width: 3.5rem;
  height: 3.5rem;  
  border-radius: 50%;
  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
export const WalletTitle = styled.h3`
  font-size: 1.2rem;  
  cursor: pointer;
  font-family: 'FightingSpirit';
  color: #fff;
  margin-left: 0.8rem;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 3px #000;
`
export const TopLeftCorner = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  transition: all .3s ease;
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  top: -3px;
  left: -3px;
  border-top-left-radius: 10px;
`
export const BottomRightRadius = styled.div`
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  bottom: -3px;
  right: -3px;
  border-bottom-right-radius: 10px;
  position: absolute;
  width: 1rem;
  height: 1rem;
  transition: all .3s ease;
`
export const MiddleBorder = styled.div`
  width: 2rem; 
  top: -3px;
  border-bottom: 3px solid #fff;
  border-top: 3px solid #fff;
  position: absolute;
  transition: all .3s ease;
  left: 50%;
  transform: translateX(-50%);
  height: calc(100% + 6px);
`
