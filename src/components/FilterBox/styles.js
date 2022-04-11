import styled from 'styled-components';

export const FilterBoxWrapper = styled.div`
  background-color: #fff;  
  border: 1px solid #eaeff5;
  box-shadow: 0 4px 10px 0 rgb(41 128 185 / 7%);
  border-radius: 6px;
  position: relative;
  margin-top: 30px;
`

export const TitleSection = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #eaeff5;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: #222;
  text-transform: capitalize;
  margin: 0;
`

export const FilterMenuList = styled.ul`
  padding: 20px;
  list-style: none;
  margin: 0;
  li:last-child {
    margin-bottom: 0;
  }
`

export const FilterMenu = styled.li`
  margin-bottom: 15px;
`
