import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 120px 0;
  @media screen and (max-width: 991px) {
    padding: 60px 0;
  }
`

export const Container = styled.div`
  max-width: 1216px;
  margin: 0 auto;
`;
export const Section = styled.div`
  margin-top: 2rem;
  &#introduce{
    margin-top: 4rem;
    display: flex;
    justify-content: space-around;
  }

  &#foxes{
    margin-top: 4rem;
    height: 240px;
    .area{
      white-space: nowrap;
    }
  }
`;
export const Title = styled.div`
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  color: #222;
  letter-spacing: .5px;
  margin-bottom: 20px;
  @media screen and (max-width: 575px) {
    font-size: 30px;
  }
`;
export const InputSection = styled.div`
  text-align: center;
  padding: 0;
  padding-bottom: 24px;
`
export const InputText = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  padding: 20px 0;
`
export const InputText1 = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  padding: 10px 0;
`
export const InputText2 = styled.div`    
  font-size: 20px;
  font-weight: 600;
  padding: 10px 10px;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SpanItem = styled.span` 
  cursor: pointer;
  box-shadow: 0 4px 10px 0 rgb(41 128 185 / 7%);
  border: 1px solid #eaeff5;
  font-size: 15px;
  padding: 0 !important;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-left: 8px;
  margin-right: 8px;
  line-height: 1;
`
export const InputItem = styled.input`
  height: 40px;
  width: 160px; 
  font-size: 20px;
  text-align: center;
  padding: 15px 15px;  
  outline: 0;
  font-size: 20px;
  color: #222;
  border: 1px solid #eaeff5;
  border-radius: 6px;  
  height: auto;
  box-shadow: 0 4px 10px 0 rgb(41 128 185 / 7%);
`
export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 16px;
`
export const ButtonItem = styled.div`
  border-radius: 10px;
  padding: 7px 20px;
  border: 2px solid black;
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ButtonItem1 = styled.div`
  border-radius: 10px;
  padding: 7px 20px;
  border: 2px solid red;
  margin: 0 10px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--colorOrange);
  border:1px solid var(--colorOrange);
  cursor: pointer;
  &:hover{
    background: #000 !important;
    text-decoration: none;
    border-color: #000 !important;
    outline: none !important;
}
`
export const ImgSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px){
    display: block;
    text-align: center;
}
`
export const ImgItem = styled.div`
  
`
export const ContractDiv = styled.div`
  padding-top: 2%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);  
`

export const ContractLink = styled.a`
  word-break: break-all;
  color: var(--colorOrange);
`
export const Img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;  
`
export const InfosBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between; 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`
export const InfoLabel = styled.p`
  font-size: 18px;
  line-height: 1.4;
  color: #222;
  font-weight: bold;
  margin: 0;
`
export const InfoValue = styled.p`
  font-size: 14px;
  color: var(--colorOrange);
  font-weight: bold;
  margin: 0;
`

export const MintCard = styled.div`
  margin-bottom:30px;
  padding: 16px;
  box-shadow: 0px 0px 15px rgb(238 238 238);
  border-radius: 10px;
`
export const MintContainer = styled.div`
  display: contents;
`
