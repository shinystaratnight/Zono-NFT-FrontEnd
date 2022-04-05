import styled from 'styled-components';

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
  font-size: 32px;
  font-weight: bold;
  label{
    white-space: nowrap;
    letter-spacing: .05rem;
    animation : typing 5s steps(240, end);
    overflow: hidden;
  }
  @keyframes typing{
    from {
      width: 1%;
    }
    to{
      width: 100%;
    }
  }
`;
export const InputSection = styled.div`
  text-align: center;
  padding: 24px 0;
`
export const InputText = styled.div`
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    padding: 20px 0;
`
export const InputText1 = styled.div`
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 10px 0;
`
export const InputText2 = styled.div`
    // text-align: center;
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
    font-size: 35px;
    cursor: pointer;
`
export const InputItem = styled.input`
    height: 40px;
    width: 160px;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
`
export const ButtonSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 28px;
    padding-bottom: 28px;
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
    padding: 1% 3%;
`
export const ContractDiv = styled.div`
    padding-top: 2%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`
