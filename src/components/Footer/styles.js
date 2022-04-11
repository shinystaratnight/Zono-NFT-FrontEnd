import styled from 'styled-components';

export const Wrapper = styled.div`

`

export const MainFooter = styled.div`
  background: #2f2272;
  padding: 60px 0;
`
export const LogoImg = styled.img`
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 575px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`

export const RightInfo = styled.div`
  padding: 20px 0;
  background-color: #201854;
`
export const RightInfoText = styled.p`
  color: white;
  margin: 0;
  @media screen and (max-width: 575px) {
    text-align: center;
  }
`
export const SocialLinkList = styled.div`
  display: flex;
  justify-content: end;
  @media screen and (max-width: 575px) {
    justify-content: center;
    margin-top: 1rem;
  }
`
export const SocialLink = styled.div`
  margin: 0 4px;
`