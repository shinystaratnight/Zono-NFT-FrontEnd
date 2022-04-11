import styled from 'styled-components';

export const AccountCircleBtn = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 10px;
  @media(max-width:767px){
    width: 40px;
    height: 40px;
  }
`;
export const DropDownMenu = styled.div`
  padding 12px 24px;
  cursor: pointer;
  width: 240px;
  &:hover {
    background-color: #e3e3e3;
  }
`;
